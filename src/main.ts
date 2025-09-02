import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    const banner = document.createElement('div')
    banner.className = 'update-banner'
    banner.innerHTML = `
      <span>🔄 Nova versão disponível</span>
      <button>Atualizar</button>
    `
    document.body.appendChild(banner)
    banner.querySelector('button')!.addEventListener('click', () => {
      updateSW(true)
    })
  },
  onOfflineReady() {
    console.log('✅ App pronto para uso offline')
  }
})

import './style.css'
import { Home, initHome } from './pages/home'
import { EcoScan, initEcoScan } from './pages/ecoscan'
import { EcoGames, initEcoGames } from './pages/ecogames'
import { EcoPontos, initEcoPontos } from './pages/ecopontos'

type Route = { view: () => string, init?: () => void }

const routes: Record<string, Route> = {
    '/': { view: Home, init: initHome },
    '/ecoscan': { view: EcoScan, init: initEcoScan },
    '/ecogames': { view: EcoGames, init: initEcoGames },
    '/ecopontos': { view: EcoPontos, init: initEcoPontos },
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
