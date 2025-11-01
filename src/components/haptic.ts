// Haptic feedback utility for games
export function vibrate(pattern: number | number[]): void {
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(pattern)
    } catch (e) {
      // Silently fail if vibration not supported
    }
  }
}

// Predefined patterns
export const VIBRATION_PATTERNS = {
  success: 50,           // Short success vibration
  error: [100, 50, 100], // Double vibration for error
  achievement: [50, 100, 50, 100, 50], // Pattern for badge unlock
  light: 25,             // Very light tap
  medium: 50,            // Medium feedback
  strong: 100            // Strong feedback
}

export function vibrateSuccess(): void {
  vibrate(VIBRATION_PATTERNS.success)
}

export function vibrateError(): void {
  vibrate(VIBRATION_PATTERNS.error)
}

export function vibrateAchievement(): void {
  vibrate(VIBRATION_PATTERNS.achievement)
}
