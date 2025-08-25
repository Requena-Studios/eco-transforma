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
                description: 'App educativo sobre reciclagem e sustentabilidade',
                lang: 'pt-BR',
                dir: 'ltr',

                id: '/eco-transforma/',
                start_url: '/eco-transforma/',
                scope: '/eco-transforma/',
                display: 'standalone',
                display_override: ['standalone', 'window-controls-overlay'],

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
                    {
                        src: 'screenshots/tall.png',
                        sizes: '720x1280',
                        type: 'image/png',
                        label: 'Tela inicial (mobile)'
                    },
                    {
                        src: 'screenshots/wide.png',
                        sizes: '1600x900',
                        type: 'image/png',
                        form_factor: 'wide',
                        label: 'Tela inicial (desktop)'
                    }
                ],

                shortcuts: [
                    {
                        name: 'EcoScan',
                        short_name: 'EcoScan',
                        url: '/eco-transforma/#/ecoscan',
                        icons: [{ src: 'icons/192.png', sizes: '192x192', type: 'image/png' }]
                    },
                    {
                        name: 'EcoJogos',
                        short_name: 'EcoJogos',
                        url: '/eco-transforma/#/ecogames',
                        icons: [{ src: 'icons/192.png', sizes: '192x192', type: 'image/png' }]
                    },
                    {
                        name: 'EcoPontos',
                        short_name: 'EcoPontos',
                        url: '/eco-transforma/#/ecopontos',
                        icons: [{ src: 'icons/192.png', sizes: '192x192', type: 'image/png' }]
                    }
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
