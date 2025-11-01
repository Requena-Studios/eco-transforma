import { registerSW } from 'virtual:pwa-register'

const UPDATE_FLAG = 'eco:updatePending'

// Auto-register SW, redirect to Updating page and apply the update
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    try { sessionStorage.setItem(UPDATE_FLAG, '1') } catch {}
    if (location.hash !== '#/updating') location.hash = '#/updating'
    // Give the router a tick to render the page before reloading
    setTimeout(() => updateSW(true), 150)
  },
  onRegisteredSW(_swUrl, r) {
    // Optional: periodic update checks
    if (r) setInterval(() => r.update(), 10 * 60 * 1000)
  },
  onOfflineReady() { /* noop */ }
})

import './style.css'
import { Home, initHome } from './pages/home'
import { EcoInfo, initEcoInfo } from './pages/ecoinfo'
import { EcoGames, initEcoGames } from './pages/ecogames'
import { EcoPontos, initEcoPontos } from './pages/ecopontos'
import { DebugAssets, initDebugAssets } from './pages/debug-assets'
import { Updating, initUpdating } from './pages/updating'

type Route = { view: () => string, init?: () => void }

const routes: Record<string, Route> = {
  '/': { view: Home, init: initHome },
  '/ecoinfo': { view: EcoInfo, init: initEcoInfo },
  '/ecogames': { view: EcoGames, init: initEcoGames },
  '/ecopontos': { view: EcoPontos, init: initEcoPontos },
  '/debug-assets': { view: DebugAssets, init: initDebugAssets },
  '/updating': { view: Updating, init: initUpdating },
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

// If flag is set (pre-reload), land on Updating page to show completion state.
if (sessionStorage.getItem(UPDATE_FLAG) === '1') {
  if (location.hash !== '#/updating') location.hash = '#/updating'
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
