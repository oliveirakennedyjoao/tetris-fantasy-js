export class Controller {
  constructor(block) {
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.addEventListener("keyup", this.handleKeyUp.bind(this));
    this.block = block;
  }

  handleKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        this.block.moveLeft();
        break;
      case "ArrowRight":
        this.block.moveRight();
        break;
      case " ":
        this.block.rotate();
        break;
      case "ArrowDown":
      default:
        break;
    }
  }

  handleKeyUp(event) {
    switch (event.key) {
    }
  }
}
