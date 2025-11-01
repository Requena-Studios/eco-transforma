import { vibrateAchievement } from './haptic'

const STORAGE_KEY = 'eco:score'

export type ScoreEntry = {
  gameId: string
  points: number
  timestamp: number
  completed: boolean
}

export type ScoreData = {
  totalPoints: number
  gamesPlayed: number
  gamesCompleted: number
  history: ScoreEntry[]
  badges: string[]
}

export type Badge = {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
}

const DEFAULT_DATA: ScoreData = {
  totalPoints: 0,
  gamesPlayed: 0,
  gamesCompleted: 0,
  history: [],
  badges: []
}

export function getScoreData(): ScoreData {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return { ...DEFAULT_DATA }
    return JSON.parse(data)
  } catch {
    return { ...DEFAULT_DATA }
  }
}

function saveScoreData(data: ScoreData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.error('[Score] Failed to save:', e)
  }
}

export function addScore(gameId: string, points: number, completed: boolean = false): void {
  const data = getScoreData()
  
  const entry: ScoreEntry = {
    gameId,
    points,
    timestamp: Date.now(),
    completed
  }
  
  data.totalPoints += points
  data.gamesPlayed += 1
  if (completed) data.gamesCompleted += 1
  data.history.unshift(entry)
  
  // Keep only last 50 entries
  if (data.history.length > 50) {
    data.history = data.history.slice(0, 50)
  }
  
  // Check for new badges
  checkAndUnlockBadges(data)
  
  saveScoreData(data)
  
  // Dispatch event for UI updates
  window.dispatchEvent(new CustomEvent('score-updated', { detail: data }))
}

export function resetScore(): void {
  localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new CustomEvent('score-updated', { detail: DEFAULT_DATA }))
}

// Badge system
const BADGE_DEFINITIONS: Omit<Badge, 'unlocked'>[] = [
  {
    id: 'first-game',
    name: 'Primeiro Passo',
    description: 'Jogou o primeiro jogo!',
    icon: 'fa-star'
  },
  {
    id: 'points-100',
    name: 'Iniciante Eco',
    description: 'Alcançou 100 pontos',
    icon: 'fa-seedling'
  },
  {
    id: 'points-500',
    name: 'Eco Aprendiz',
    description: 'Alcançou 500 pontos',
    icon: 'fa-leaf'
  },
  {
    id: 'points-1000',
    name: 'Eco Expert',
    description: 'Alcançou 1000 pontos',
    icon: 'fa-trophy'
  },
  {
    id: 'games-10',
    name: 'Jogador Dedicado',
    description: 'Completou 10 jogos',
    icon: 'fa-gamepad'
  },
  {
    id: 'games-25',
    name: 'Eco Mestre',
    description: 'Completou 25 jogos',
    icon: 'fa-crown'
  }
]

function checkAndUnlockBadges(data: ScoreData): void {
  const newBadges: string[] = []
  
  BADGE_DEFINITIONS.forEach(badge => {
    if (data.badges.includes(badge.id)) return
    
    let unlock = false
    
    if (badge.id === 'first-game' && data.gamesPlayed >= 1) unlock = true
    if (badge.id === 'points-100' && data.totalPoints >= 100) unlock = true
    if (badge.id === 'points-500' && data.totalPoints >= 500) unlock = true
    if (badge.id === 'points-1000' && data.totalPoints >= 1000) unlock = true
    if (badge.id === 'games-10' && data.gamesCompleted >= 10) unlock = true
    if (badge.id === 'games-25' && data.gamesCompleted >= 25) unlock = true
    
    if (unlock) {
      data.badges.push(badge.id)
      newBadges.push(badge.id)
    }
  })
  
  // Show badge notification
  if (newBadges.length > 0) {
    newBadges.forEach(badgeId => {
      const badge = BADGE_DEFINITIONS.find(b => b.id === badgeId)
      if (badge) showBadgeNotification(badge)
    })
  }
}

function showBadgeNotification(badge: Omit<Badge, 'unlocked'>): void {
  // Haptic feedback for achievement
  vibrateAchievement()
  
  // Simple toast notification
  const toast = document.createElement('div')
  toast.className = 'badge-toast'
  toast.innerHTML = `
    <i class="fa-sharp-duotone ${badge.icon}"></i>
    <div>
      <strong>Nova Conquista!</strong>
      <span>${badge.name}</span>
    </div>
  `
  
  document.body.appendChild(toast)
  
  setTimeout(() => toast.classList.add('show'), 100)
  setTimeout(() => {
    toast.classList.remove('show')
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

export function getBadges(): Badge[] {
  const data = getScoreData()
  return BADGE_DEFINITIONS.map(badge => ({
    ...badge,
    unlocked: data.badges.includes(badge.id)
  }))
}

export function getLevel(): { level: number, title: string, nextLevelPoints: number } {
  const data = getScoreData()
  const points = data.totalPoints
  
  if (points < 100) return { level: 1, title: 'Iniciante', nextLevelPoints: 100 }
  if (points < 500) return { level: 2, title: 'Aprendiz', nextLevelPoints: 500 }
  if (points < 1000) return { level: 3, title: 'Intermediário', nextLevelPoints: 1000 }
  if (points < 2000) return { level: 4, title: 'Avançado', nextLevelPoints: 2000 }
  return { level: 5, title: 'Mestre Eco', nextLevelPoints: -1 }
}
