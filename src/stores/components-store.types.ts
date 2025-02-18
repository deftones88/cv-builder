export type Position = {
  x: number;
  y: number;
};

export type Component = {
  id: string;
  type: string;
  settings: Record<string, any>;
  position: Position;
};

// type ComponentType = 'text' | 'list' | 'image';
