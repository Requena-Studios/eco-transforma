import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

function buildVersion() {
    const d = new Date()
    const pad = (n: number, l = 2) => String(n).padStart(l, '0')
    return `${d.getFullYear()}.${pad(d.getMonth() + 1)}${pad(d.getDate())}.${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
}

const ECO_VERSION = buildVersion()

export default defineConfig({
    base: '/eco-transforma/',

    plugins: [
        {
            name: 'eco-inject-version',
            enforce: 'pre',
            transformIndexHtml(html) {
                return html.replace('<html', `<html data-eco-versao="${ECO_VERSION}"`)
            },
        },

        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt', 'img/**', 'icons/**', 'data/**'],
            manifest: {
                name: 'EcoTransforma',
                short_name: 'EcoTransforma',
                description: 'App educativo sobre reciclagem e sustentabilidade',
                lang: 'pt-BR',
                dir: 'ltr',
                id: '/eco-transforma/index.html',
                start_url: '/eco-transforma/index.html?source=pwa',
                scope: '/eco-transforma/',
                display: 'fullscreen',
                display_override: ['fullscreen', 'window-controls-overlay'],
                theme_color: '#0a7a3d',
                background_color: '#ffffff',
                orientation: 'portrait',
                categories: ['education', 'kids', 'games', 'utilities'],
                icons: [
                    { src: 'icons/16.png', sizes: '16x16', type: 'image/png', purpose: 'any' },
                    { src: 'icons/32.png', sizes: '32x32', type: 'image/png', purpose: 'any' },
                    { src: 'icons/192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
                    { src: 'icons/512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
                    { src: 'icons/192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
                    { src: 'icons/512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
                ],
                screenshots: [
                    { src: 'screenshots/tall.png', sizes: '720x1280', type: 'image/png', label: 'Tela inicial (mobile)' },
                    { src: 'screenshots/wide.png', sizes: '1600x900', type: 'image/png', form_factor: 'wide', label: 'Tela inicial (desktop)' }
                ],
                shortcuts: [
                    { name: 'EcoInfo', short_name: 'EcoInfo', url: '/eco-transforma/#/ecoinfo', icons: [{ src: 'icons/192.png', sizes: '192x192', type: 'image/png' }] },
                    { name: 'EcoJogos', short_name: 'EcoJogos', url: '/eco-transforma/#/ecogames', icons: [{ src: 'icons/192.png', sizes: '192x192', type: 'image/png' }] },
                    { name: 'EcoPontos', short_name: 'EcoPontos', url: '/eco-transforma/#/ecopontos', icons: [{ src: 'icons/192.png', sizes: '192x192', type: 'image/png' }] }
                ]
            },
            workbox: process.env.NODE_ENV === 'production' ? {
                clientsClaim: true,
                skipWaiting: true,
                cleanupOutdatedCaches: true,
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,json,woff2}'],
                navigateFallback: '/eco-transforma/index.html',
                runtimeCaching: [
                    {
                        // Avoid caching documents (HTML) to reduce stale shells
                        urlPattern: ({ url, request }) =>
                            url.pathname.startsWith('/eco-transforma/') &&
                            request.destination !== 'document',
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'eco-data',
                            expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 },
                            cacheableResponse: { statuses: [0, 200] }
                        }
                    },
                    {
                        urlPattern: ({ url }) => ['kit.fontawesome.com'].includes(url.hostname),
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'fa-cdn',
                            expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 },
                            cacheableResponse: { statuses: [0, 200] }
                        }
                    }
                ]
            } : undefined,
            devOptions: { enabled: true }
        })
    ]
})
