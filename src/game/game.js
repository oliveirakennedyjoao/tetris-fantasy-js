export class Game {
  constructor() {
    this.app = document.getElementById("app");
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 400;
    this.canvas.height = 600;

    this.MOVE_VELOCITY = 1;
    this.PAUSE_GAME = false;
    this.DELTA_TIME = 0;
    this.BLOCK_SIZE = 40;

    this.previousTime = 0;
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  debug() {
    this.ctx.fillStyle = "black";
    this.ctx.lineWidth = 1;

    for (let x = 0; x < 10; x++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x * this.BLOCK_SIZE, 0);
      this.ctx.lineTo(x * this.BLOCK_SIZE, 600);
      this.ctx.stroke();
    }

    for (let y = 0; y < 15; y++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y * this.BLOCK_SIZE);
      this.ctx.lineTo(400, y * this.BLOCK_SIZE);
      this.ctx.stroke();
    }
  }

  renderScreen(screenTemplate) {
    this.app.innerHTML = screenTemplate;
  }

  renderAtGameScreen(renderingFn) {
    return renderingFn(this.ctx);
  }
}
