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

// PWA Install Logic (Global)
export let deferredPrompt: BeforeInstallPromptEvent | null = null

function isInstalled(): boolean {
  const mq = (q: string) => matchMedia(q).matches
  const appLike =
    mq('(display-mode: fullscreen)') ||
    mq('(display-mode: standalone)') ||
    mq('(display-mode: window-controls-overlay)') ||
    mq('(display-mode: minimal-ui)')
  const iosStandalone = (navigator as any).standalone === true
  const twa = document.referrer?.startsWith('android-app://') ?? false
  return appLike || iosStandalone || twa
}

window.addEventListener('beforeinstallprompt', (e: Event) => {
  e.preventDefault()
  deferredPrompt = e as BeforeInstallPromptEvent
  window.dispatchEvent(new CustomEvent('pwa-installable'))
})

window.addEventListener('appinstalled', () => {
  deferredPrompt = null
  window.dispatchEvent(new CustomEvent('pwa-installed'))
})

export async function installPWA(): Promise<void> {
  if (!deferredPrompt) return
  if (isInstalled()) return
  await deferredPrompt.prompt()
  await deferredPrompt.userChoice
  deferredPrompt = null
}

export { isInstalled }

import './style.css'
import { initNetworkStatus } from './components/network-status'
import { Home, initHome } from './pages/home'
import { EcoInfo, initEcoInfo } from './pages/ecoinfo'
import { EcoGames, initEcoGames } from './pages/ecogames'
import { EcoPontos, initEcoPontos } from './pages/ecopontos'
import { EcoStats, initEcoStats } from './pages/ecostats'
import { DebugAssets, initDebugAssets } from './pages/debug-assets'
import { Updating, initUpdating } from './pages/updating'

type Route = { view: () => string, init?: () => void, cleanup?: () => void }

const routes: Record<string, Route> = {
  '/': { view: Home, init: initHome },
  '/ecoinfo': { view: EcoInfo, init: initEcoInfo },
  '/ecogames': { view: EcoGames, init: initEcoGames },
  '/ecopontos': { view: EcoPontos, init: initEcoPontos },
  '/ecostats': { view: EcoStats, init: initEcoStats },
  '/debug-assets': { view: DebugAssets, init: initDebugAssets },
  '/updating': { view: Updating, init: initUpdating },
}

let currentCleanup: (() => void) | undefined

async function router() {
  const app = document.getElementById('app')
  if (!app) return

  // Fade out
  app.classList.add('page-transitioning-out')
  await new Promise(resolve => setTimeout(resolve, 150))

  // Run cleanup from previous route
  if (currentCleanup && typeof currentCleanup === 'function') {
    currentCleanup()
  }
  currentCleanup = undefined

  const hash = location.hash.replace('#', '') || '/'
  const route = routes[hash] ?? { view: () => '<h2>404</h2><p>Página não encontrada</p>' }
  
  app.innerHTML = route.view()
  const cleanup = route.init?.()
  if (cleanup && typeof cleanup === 'function') {
    currentCleanup = cleanup
  }

  // Fade in
  app.classList.remove('page-transitioning-out')
  app.classList.add('page-transitioning-in')
  await new Promise(resolve => setTimeout(resolve, 150))
  app.classList.remove('page-transitioning-in')

  document.querySelectorAll('nav a').forEach(a => {
    const href = (a as HTMLAnchorElement).getAttribute('href') || '#/'
    a.classList.toggle('active', href === `#${hash}`)
  })
}

// If flag is set (pre-reload), land on Updating page to show completion state.
if (sessionStorage.getItem(UPDATE_FLAG) === '1') {
  if (location.hash !== '#/updating') location.hash = '#/updating'
}

// Initialize network status indicator
initNetworkStatus()

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
