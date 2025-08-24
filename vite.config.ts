import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    base: '/eco-transforma/',

    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [ 'favicon.ico', 'robots.txt', 'img/**', 'icons/**'],
            manifest: {
                name: 'EcoTransforma',
                short_name: 'EcoTransforma',
                start_url: '/eco-transforma/',
                scope: '/eco-transforma/',
                display: 'standalone',
                theme_color: '#0a7a3d',
                background_color: '#ffffff',
                icons: [
                    { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
                    { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
                    { src: 'pwa-512x512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
                ]
            },
            workbox: process.env.NODE_ENV === 'production' ? {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
                runtimeCaching: [
                  {
                    urlPattern: ({url}) =>
                      url.pathname.startsWith(`${import.meta.env.BASE_URL}data/`) ||
                      url.pathname.startsWith('/eco-transforma/data/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                      cacheName: 'eco-data',
                      expiration: { maxEntries: 50, maxAgeSeconds: 7*24*60*60 },
                      cacheableResponse: { statuses: [0, 200] }
                    }
                  }
                ]
              } : undefined,
              devOptions: { enabled: true }
        })
    ]
})
