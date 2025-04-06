import { Board, Block } from "./models";
import { Game } from "./game/game";

const engine = new Game();
const { clearScreen, debug, renderAtGameScreen, PAUSE_GAME } = engine;
const board = new Board();

let previousTime = 0;
let DELTA_TIME = 0;
let x = 0;
let frameCounter = 1;

function run(currentTime) {
  if (!PAUSE_GAME) {
    DELTA_TIME = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
  }

  if (frameCounter % 120 === 0) {
    // update the game state
    board.update();

    if (frameCounter === 120) {
      frameCounter = 1;
    }
  } else {
    frameCounter += 1;
  }

  engine.clearScreen();
  engine.debug();
  engine.renderAtGameScreen(board.render.bind(board));

  window.requestAnimationFrame(run);
}

run(0);
