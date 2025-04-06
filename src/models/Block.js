import {
  CANVAS_HEIGHT,
  BLOCK_SIZE,
  Pieces,
  CANVAS_WIDTH,
} from "../consts/piece";
import { Controller } from "../game/contoller";

export class Block {
  constructor() {
    this.type = Pieces.H;
    // this.color = color;
    this.x = 0;
    this.y = 0;
    this.controller = new Controller(this);
  }

  moveLeft() {
    if (this.x - BLOCK_SIZE >= 0) {
      this.x -= BLOCK_SIZE;
    }
  }

  moveRight() {
    if (1 + this.x + this.type[0].length * BLOCK_SIZE <= CANVAS_WIDTH) {
      this.x += BLOCK_SIZE;
    }
  }

  rotate() {
    // Rotate the block by swapping rows and columns
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
    if (BLOCK_SIZE * this.type.length + this.y < CANVAS_HEIGHT) {
      this.y += BLOCK_SIZE;
    }
  }

  render(ctx) {
    ctx.fillStyle = "red";

    for (let i = 0; i < this.type.length; i++) {
      for (let j = 0; j < this.type[i].length; j++) {
        if (this.type[i][j] === 1) {
          ctx.fillRect(
            j * BLOCK_SIZE + this.x,
            i * BLOCK_SIZE + this.y,
            BLOCK_SIZE,
            BLOCK_SIZE
          );
        }
      }
    }
  }
}
