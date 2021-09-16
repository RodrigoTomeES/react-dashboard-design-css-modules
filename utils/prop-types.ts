export const tuple = <T extends string[]>(...args: T) => args;

const buttonTypes = tuple(
  'default',
  'secondary',
  'abort'
);

const cardTypes = tuple(
  'default'
);

export type ButtonTypes = typeof buttonTypes[number];

export type CardTypes = typeof cardTypes[number];
