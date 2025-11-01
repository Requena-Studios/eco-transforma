let statusIcon: HTMLElement | null = null

export function initNetworkStatus() {
  createStatusIcon()
  attachListeners()
  updateStatus()
}

function createStatusIcon() {
  if (statusIcon) return
  
  const header = document.querySelector('.app-header-container')
  if (!header) return
  
  statusIcon = document.createElement('i')
  statusIcon.id = 'network-status-icon'
  statusIcon.className = 'network-status-icon'
  statusIcon.setAttribute('role', 'status')
  statusIcon.setAttribute('aria-live', 'polite')
  
  header.appendChild(statusIcon)
}

function attachListeners() {
  window.addEventListener('online', updateStatus)
  window.addEventListener('offline', updateStatus)
}

function updateStatus() {
  if (!statusIcon) return
  
  const isOnline = navigator.onLine
  
  if (isOnline) {
    statusIcon.className = 'network-status-icon online'
    statusIcon.setAttribute('aria-label', 'Conectado à internet')
    statusIcon.innerHTML = '<i class="fa-sharp-duotone fa-wifi"></i>'
  } else {
    statusIcon.className = 'network-status-icon offline'
    statusIcon.setAttribute('aria-label', 'Sem conexão com a internet')
    statusIcon.innerHTML = '<i class="fa-sharp-duotone fa-wifi-slash"></i>'
  }
}

export function cleanupNetworkStatus() {
  window.removeEventListener('online', updateStatus)
  window.removeEventListener('offline', updateStatus)
  
  if (statusIcon && statusIcon.parentElement) {
    statusIcon.parentElement.removeChild(statusIcon)
    statusIcon = null
  }
}
