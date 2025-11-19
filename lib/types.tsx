export const SHAPES = ['apple', 'heart', 'car'] as const;

export type ShapeType = (typeof SHAPES)[number];
