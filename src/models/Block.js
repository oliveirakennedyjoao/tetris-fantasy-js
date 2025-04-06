import {
  CANVAS_HEIGHT,
  BLOCK_SIZE,
  PIECES,
  PIECES_TYPES,
  CANVAS_WIDTH,
} from "../consts/piece";
import { Controller } from "../game/contoller";

export class Block {
  constructor() {
    const randomIndex = Math.floor(Math.random() * PIECES_TYPES.length);

    this.type = PIECES[PIECES_TYPES[randomIndex]];

    this.i = 0;
    this.j = 0;
    this.controller = new Controller(this);
  }

  moveLeft() {
    if (this.j >= 0) {
      this.j -= 1;
    }
  }

  moveRight() {
    if (this.j + this.type[0].length <= CANVAS_WIDTH / BLOCK_SIZE) {
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
    this.type = rotated;
  }

  update() {
    this.i += 1;
  }

  render(ctx) {
    ctx.fillStyle = "red";

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
