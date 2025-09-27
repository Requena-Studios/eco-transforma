export function Updating() {
  return /*html*/`
  <section class="shout" style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
    <h2 style="margin:0;display:flex;align-items:center;gap:.5rem;">
      <i class="fa-sharp-duotone fa-rotate"></i>
      ATUALIZAÇÃO
    </h2>

    <p id="upd-msg" style="text-align:center;margin:0;">Baixando atualização...</p>

    <div style="width:min(520px,90vw);">
      <div style="height:10px;background:#e5e7eb;border-radius:999px;overflow:hidden;">
        <span id="upd-bar" style="
          display:block;height:100%;width:20%;
          background:#0a7a3d;border-radius:999px;
          transition:width .2s ease;
        "></span>
      </div>
    </div>

    <div id="upd-actions" style="display:none;">
      <button id="upd-home" class="btn" aria-label="Voltar à página inicial">
        <i class="fa-sharp-duotone fa-circle-left" style="margin-right:.35rem;"></i>
        VOLTAR AO INÍCIO
      </button>
    </div>
  </section>
  `
}

export async function initUpdating() {
  const FLAG = 'eco:updatePending'
  const bar = document.getElementById('upd-bar') as HTMLSpanElement | null
  const msg = document.getElementById('upd-msg') as HTMLParagraphElement | null
  const actions = document.getElementById('upd-actions') as HTMLDivElement | null

  // Simple indeterminate animation
  let w = 10, dir = 1
  const timer = window.setInterval(() => {
    if (!bar) return
    w += dir * 7
    if (w >= 90) dir = -1
    if (w <= 10) dir = 1
    bar.style.width = `${w}%`
  }, 150)

  function done() {
    window.clearInterval(timer)
    if (bar) bar.style.width = '100%'
    if (msg) msg.textContent = 'Atualização concluída!'
    if (actions) {
      actions.style.display = 'block'
      const btn = document.getElementById('upd-home') as HTMLButtonElement | null
      btn?.addEventListener('click', () => {
        sessionStorage.removeItem(FLAG)
        location.hash = '#/'
      })
    }
  }

  // If there is no installing/waiting worker, we are effectively done.
  const reg = await navigator.serviceWorker.getRegistration()
  const maybeDone = () => {
    // If nothing is installing or waiting, assume active SW is in place
    if (!reg?.installing && !reg?.waiting) {
      done()
    }
  }

  // If we arrive here after a reload, we should already be done.
  maybeDone()

  // Also listen for controller changes (activation)
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // Small delay to let activation settle
    setTimeout(maybeDone, 0)
  })
}
