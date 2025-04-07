import {
  CANVAS_HEIGHT,
  BLOCK_SIZE,
  PIECES,
  PIECES_TYPES,
  CANVAS_WIDTH,
  COLORS,
} from "../consts";
import { Controller } from "../game/contoller";

export class Block {
  constructor() {
    const piece = PIECES_TYPES[Math.floor(Math.random() * PIECES_TYPES.length)];

    console.log("piece", piece);

    this.type = PIECES[piece];
    this.color = piece;
    this.i = 0 - this.type.length;
    this.j = Math.floor(
      Math.random() * (CANVAS_WIDTH / BLOCK_SIZE - this.type[0].length)
    );

    this.controller = new Controller(this);
  }

  moveLeft() {
    if (this.j - 1 >= 0) {
      this.j -= 1;
    }
  }

  moveRight() {
    if (this.j + this.type[0].length + 1 <= CANVAS_WIDTH / BLOCK_SIZE) {
      this.j += 1;
    }
  }

  rotate() {
    const rotated = [];
    for (let i = 0; i < this.type[0].length; i++) {
      for (let j = 0; j < this.type.length; j++) {
        if (!rotated[i]) {
          rotated[i] = [];
        }
        rotated[i][j] = this.type[this.type.length - j - 1][i];
      }
    }

    if (this.j + rotated[0].length > CANVAS_WIDTH / BLOCK_SIZE) {
      this.j = CANVAS_WIDTH / BLOCK_SIZE - rotated[0].length;
    }

    this.type = rotated;
  }

  update() {
    this.i += 1;
  }

  render(ctx) {
    ctx.fillStyle = COLORS[this.color];

    for (let i = 0; i < this.type.length; i++) {
      for (let j = 0; j < this.type[i].length; j++) {
        if (this.type[i][j] === 1) {
          ctx.fillRect(
            this.j * BLOCK_SIZE + j * BLOCK_SIZE,
            this.i * BLOCK_SIZE + i * BLOCK_SIZE,
            BLOCK_SIZE,
            BLOCK_SIZE
          );
        }
      }
    }
  }
}
