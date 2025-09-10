export function DebugAssets(): string {
    return /* html */ `
    <section style="padding:1rem">
      <h2 style="margin:0 0 .25rem">Debug Assets</h2>
      <p id="dbg-summary" style="margin:.25rem 0 1rem;color:#666">Loading…</p>
      <div style="overflow:auto; max-height:62vh; border:1px solid #e5e5e5; border-radius:6px">
        <table style="border-collapse:collapse;min-width:80vw;width:100%">
          <thead style="position:sticky; top:0; background:#f6f6f6; z-index:1">
            <tr>
              <th style="text-align:left;border:1px solid #ccc;padding:.5rem;background:#f6f6f6;width:40px">Image</th>
              <th style="text-align:left;border:1px solid #ccc;padding:.5rem;background:#f6f6f6">Name</th>
              <th style="text-align:left;border:1px solid #ccc;padding:.5rem;background:#f6f6f6;width:40px">Status</th>
            </tr>
          </thead>
          <tbody id="dbg-rows"></tbody>
        </table>
      </div>
    </section>
  `;
}

export function initDebugAssets(): void {
    void run();
}

async function run(): Promise<void> {
    const ASSETS_JSON = `${import.meta.env.BASE_URL}data/assets.json`;
    const ECOSCAN_JSON = `${import.meta.env.BASE_URL}data/ecoscan-items.json`;

    const tbody = document.getElementById("dbg-rows");
    const summary = document.getElementById("dbg-summary");
    if (!tbody || !summary) return;

    try {
        const [assetsData, ecoscanData] = await Promise.all([
            fetchJson(ASSETS_JSON),
            fetchJson(ECOSCAN_JSON),
        ]);

        type Entry = {
            kind: "bin" | "item";
            title: string;
            typeOrId: string;
            imgPath: string | null;
            exists?: boolean;
        };

        const fromAssets: Entry[] = [];
        for (const b of (assetsData.bins ?? [])) {
            fromAssets.push({
                kind: "bin",
                title: (b.title ?? b.id) as string,
                typeOrId: (b.id ?? "") as string,
                imgPath: normalizePath(b.img as string | undefined)
            });
        }
        for (const it of (assetsData.items ?? [])) {
            fromAssets.push({
                kind: "item",
                title: (it.name ?? "") as string,
                typeOrId: (it.type ?? "") as string,
                imgPath: normalizePath(it.img as string | undefined)
            });
        }

        const fromEco: Entry[] = [];
        for (const b of (ecoscanData.bins ?? [])) {
            fromEco.push({
                kind: "bin",
                title: (b.nome ?? b.id) as string,
                typeOrId: (b.id ?? "") as string,
                imgPath: normalizePath(b.img as string | undefined)
            });
        }
        for (const it of (ecoscanData.items ?? [])) {
            fromEco.push({
                kind: "item",
                title: (it.nome ?? it.id ?? "") as string,
                typeOrId: (it.lixeira ?? it.id ?? "") as string,
                imgPath: normalizePath(it.img as string | undefined)
            });
        }

        // Distinct after merging: prefer dedupe by imgPath; if missing imgPath, dedupe by title
        const unique = new Map<string, Entry>();
        for (const e of [...fromAssets, ...fromEco]) {
            const key = e.imgPath ?? `title:${e.title.toLowerCase()}`;
            if (!unique.has(key)) unique.set(key, e);
        }
        const entries = Array.from(unique.values());

        // Check existence
        await Promise.all(entries.map(async e => {
            e.exists = e.imgPath ? await exists(e.imgPath) : false;
        }));

        // Sort: missing first, then by title ASC
        entries.sort((a, b) => {
            if (a.exists !== b.exists) return a.exists ? 1 : -1;
            return a.title.localeCompare(b.title);
        });

        // Render
        tbody.innerHTML = "";
        let missing = 0;
        for (const e of entries) {
            if (!e.exists) missing++;
            const tr = document.createElement("tr");
            if (!e.exists) tr.style.background = "#fff3f3";
            const imgSrc = e.imgPath ? bust(e.imgPath) : "";
            tr.innerHTML = `
        <td style="border:1px solid #ccc;padding:.35rem .5rem;width:40px;text-align:center;vertical-align:middle">
          ${imgSrc
                    ? `<img src="${imgSrc}" alt="" width="32" height="32"
                 loading="lazy" decoding="async"
                 style="width:32px;height:32px;object-fit:contain;border:1px solid ${e.exists ? "#ddd" : "#f00"};background:#fff;border-radius:2px" />`
                    : `<span style="display:inline-block;width:32px;height:32px;border:1px solid #f00;border-radius:2px;background:#fff"></span>`}
        </td>
        <td style="border:1px solid #ccc;padding:.5rem">${escapeHtml(e.title)}</td>
        <td style="border:1px solid #ccc;padding:.5rem;width:40px;text-align:center;vertical-align:middle">${e.exists ? "✅" : "❌"}</td>
      `;
            tbody.appendChild(tr);
        }

        summary.textContent = `Total: ${entries.length} • Missing: ${missing} • OK: ${entries.length - missing}`;
    } catch (err: any) {
        summary.textContent = `Error: ${err?.message ?? String(err)}`;
        console.error(err);
    }
}

// Build correct public URL: ${BASE_URL}img/ + "rest of path from JSON"
function normalizePath(p: string | undefined): string | null {
    if (!p) return null;
    let s = String(p).trim();
    s = s.replace(/^\.?\//, ""); // strip ./ or leading /
    return `${import.meta.env.BASE_URL}img/${s}`;
}

function bust(u: string): string {
    return u + (u.includes("?") ? "&" : "?") + "cb=" + Date.now();
}

// Avoid SPA fallback false-positives: require image/* content-type
async function exists(url: string): Promise<boolean> {
    const u = bust(url);

    // Try HEAD and validate content-type
    try {
        const r = await fetch(u, { method: "HEAD", cache: "no-store", redirect: "follow" });
        const ct = (r.headers.get("content-type") || "").toLowerCase();
        const cl = r.headers.get("content-length");
        if (r.ok && ct.startsWith("image/") && (cl === null || Number(cl) > 0)) return true;
    } catch { /* ignore */ }

    // Try GET with Accept: image/* and validate content-type
    try {
        const r = await fetch(u, {
            method: "GET",
            cache: "no-store",
            redirect: "follow",
            headers: { Accept: "image/*" }
        });
        const ct = (r.headers.get("content-type") || "").toLowerCase();
        const cl = r.headers.get("content-length");
        if (r.ok && ct.startsWith("image/") && (cl === null || Number(cl) > 0)) return true;
    } catch { /* ignore */ }

    // Fallback to <img> probe
    return await checkWithImage(u);
}

function checkWithImage(url: string): Promise<boolean> {
    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

async function fetchJson(path: string): Promise<any> {
    const res = await fetch(path + "?t=" + Date.now(), { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    return res.json();
}

function escapeHtml(s: string): string {
    return s.replace(/[&<>"']/g, ch =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch] as string)
    );
}
