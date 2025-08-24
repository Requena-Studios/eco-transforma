export interface Game {
  mount(root: HTMLElement): void;
  destroy?(): void;
}

export interface GameInfo {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  emoji?: string;
  load: () => Promise<Game>;
}
