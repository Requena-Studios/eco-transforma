import { getScoreData, getBadges, getLevel, resetScore, type Badge } from '../components/score-system'

export function EcoStats() {
  return /*html*/`
    <section class="shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-chart-simple"></i>
        ESTATÍSTICAS
      </h2>
      <div id="ecostats-root"></div>
    </section>
  `
}

export function initEcoStats() {
  const root = document.getElementById('ecostats-root')
  if (!root) return
  
  render()
  
  // Listen for score updates
  const onScoreUpdate = () => render()
  window.addEventListener('score-updated', onScoreUpdate)
  
  // Cleanup
  return () => {
    window.removeEventListener('score-updated', onScoreUpdate)
  }
}

function render() {
  const root = document.getElementById('ecostats-root')
  if (!root) return
  
  const data = getScoreData()
  const level = getLevel()
  const badges = getBadges()
  
  const unlockedBadges = badges.filter(b => b.unlocked)
  const lockedBadges = badges.filter(b => !b.unlocked)
  
  root.innerHTML = `
    <div class="stats-container">
      <!-- Level Card -->
      <div class="stats-card level-card">
        <div class="level-badge">
          <i class="fa-sharp-duotone fa-star"></i>
          <span class="level-number">Nível ${level.level}</span>
        </div>
        <h3>${level.title}</h3>
        <div class="level-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${getProgressPercentage(data.totalPoints, level.nextLevelPoints)}%"></div>
          </div>
          ${level.nextLevelPoints > 0 
            ? `<small>${data.totalPoints} / ${level.nextLevelPoints} pontos</small>` 
            : `<small>Nível Máximo!</small>`}
        </div>
      </div>
      
      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-item">
          <i class="fa-sharp-duotone fa-coins"></i>
          <strong>${data.totalPoints}</strong>
          <span>Pontos Totais</span>
        </div>
        <div class="stat-item">
          <i class="fa-sharp-duotone fa-gamepad"></i>
          <strong>${data.gamesPlayed}</strong>
          <span>Jogos Jogados</span>
        </div>
        <div class="stat-item">
          <i class="fa-sharp-duotone fa-circle-check"></i>
          <strong>${data.gamesCompleted}</strong>
          <span>Jogos Completos</span>
        </div>
        <div class="stat-item">
          <i class="fa-sharp-duotone fa-trophy"></i>
          <strong>${unlockedBadges.length}/${badges.length}</strong>
          <span>Badges</span>
        </div>
      </div>
      
      <!-- Badges Section -->
      <div class="badges-section">
        <h3><i class="fa-sharp-duotone fa-award"></i> Conquistas</h3>
        
        ${unlockedBadges.length > 0 ? `
          <div class="badges-grid">
            ${unlockedBadges.map(badge => renderBadge(badge, true)).join('')}
          </div>
        ` : '<p class="no-badges">Jogue mais para desbloquear badges!</p>'}
        
        ${lockedBadges.length > 0 ? `
          <h4 class="locked-title">Bloqueadas</h4>
          <div class="badges-grid locked">
            ${lockedBadges.map(badge => renderBadge(badge, false)).join('')}
          </div>
        ` : ''}
      </div>
      
      <!-- Recent Activity -->
      ${data.history.length > 0 ? `
        <div class="activity-section">
          <h3><i class="fa-sharp-duotone fa-clock-rotate-left"></i> Atividade Recente</h3>
          <div class="activity-list">
            ${data.history.slice(0, 10).map(entry => `
              <div class="activity-item">
                <i class="fa-sharp-duotone fa-circle-play"></i>
                <span>${getGameName(entry.gameId)}</span>
                <strong class="points">+${entry.points}</strong>
                <small>${formatDate(entry.timestamp)}</small>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <!-- Reset Button -->
      <div class="reset-section">
        <button id="btn-reset-stats" class="btn btn-ghost">
          <i class="fa-sharp-duotone fa-trash-can"></i>
          Resetar Estatísticas
        </button>
      </div>
    </div>
  `
  
  // Attach reset handler
  const btnReset = document.getElementById('btn-reset-stats')
  btnReset?.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja resetar todas as estatísticas? Esta ação não pode ser desfeita.')) {
      resetScore()
      render()
    }
  })
}

function renderBadge(badge: Badge, unlocked: boolean): string {
  return `
    <div class="badge-card ${unlocked ? 'unlocked' : 'locked'}">
      <i class="fa-sharp-duotone ${badge.icon}"></i>
      <strong>${badge.name}</strong>
      <small>${badge.description}</small>
    </div>
  `
}

function getProgressPercentage(current: number, target: number): number {
  if (target <= 0) return 100
  return Math.min((current / target) * 100, 100)
}

function getGameName(gameId: string): string {
  const names: Record<string, string> = {
    'quiz': 'Quiz Eco',
    'memory-match': 'Jogo da Memória',
    'choose-for-trashbin': 'Escolha a Lixeira',
    'odd-one-out-trashbin': 'Encontre o Intruso'
  }
  return names[gameId] || gameId
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp)
  const now = Date.now()
  const diff = now - timestamp
  
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (minutes < 1) return 'agora'
  if (minutes < 60) return `${minutes}min atrás`
  if (hours < 24) return `${hours}h atrás`
  if (days < 7) return `${days}d atrás`
  
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
}
