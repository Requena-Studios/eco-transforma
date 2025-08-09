import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })

import './style.css'
import { Home, initHome } from './pages/home'
import { EcoScan } from './pages/ecoscan'
import { EcoGames } from './pages/ecogames'
import { EcoPontos } from './pages/ecopontos'

type Route = { view: () => string, init?: () => void }

const routes: Record<string, Route> = {
    '/': { view: Home, init: initHome },
    '/ecoscan': { view: EcoScan },
    '/ecogames': { view: EcoGames },
    '/ecopontos': { view: EcoPontos },
}

function router() {
    const hash = location.hash.replace('#', '') || '/'
    const route = routes[hash] ?? { view: () => '<h2>404</h2><p>Página não encontrada</p>' }
    const app = document.getElementById('app')
    if (app) {
        app.innerHTML = route.view()
        route.init?.()
    }

    document.querySelectorAll('nav a').forEach(a => {
        const href = (a as HTMLAnchorElement).getAttribute('href') || '#/'
        a.classList.toggle('active', href === `#${hash}`)
    })
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
