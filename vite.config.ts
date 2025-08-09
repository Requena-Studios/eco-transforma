import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
     base: '/eco-transforma/',

    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'EcoTransforma',
                short_name: 'EcoTransforma',
                start_url: '/',
                scope: '/',
                display: 'standalone',
                theme_color: '#0a7a3d',
                background_color: '#ffffff',
                icons: [
                    { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
                    { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
                    { src: 'pwa-512x512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
            }
        })
    ]
})
