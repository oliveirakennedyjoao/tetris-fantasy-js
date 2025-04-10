export const PIECES = {
  V: [
    [1, 0],
    [1, 1],
    [1, 0],
  ],
  I: [[1], [1], [1], [1]],
  DOT: [[1]],
  Z: [
    [0, 1],
    [1, 1],
    [1, 0],
  ],
  S: [
    [1, 0],
    [1, 1],
    [0, 1],
  ],
  L: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  J: [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
  T: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  C: [
    [1, 1],
    [1, 0],
    [1, 1],
  ],
  H: [
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
  ],
  TRI: [
    [0, 1],
    [1, 1],
  ],
  BIG_Z: [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
};

export const PIECES_TYPES = Object.keys(PIECES);

export const COLORS = {
  V: "purple",
  I: "cyan",
  DOT: "yellow",
  Z: "red",
  S: "green",
  L: "blue",
  J: "orange",
  T: "pink",
  O: "brown",
  C: "gray",
  H: "lightblue",
  TRI: "lightgreen",
  BIG_Z: "lightcoral",
};

export const BLOCK_SIZE = 40;

export const CANVAS_WIDTH = 400;
export const CANVAS_HEIGHT = 600;
