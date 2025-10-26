import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import CarNameValidator from './validators/CarNameValidator.js';
import RoundCountValidator from './validators/RoundCountValidator.js';
import RacingGame from './models/RacingGame.js';

class App {
  #game;
  #roundCount;

  async run() {
    await this.#setupGame();
    await this.#playGame();
    this.#announceWinner();
  }

  async #setupGame() {
    // 자동차 이름 입력 및 검증
    const carNamesInput = await InputView.readCarNames();
    CarNameValidator.validateAll(carNamesInput);
    const carNames = carNamesInput.split(',').map((name) => name.trim());

    // 라운드 횟수 입력 및 검증
    const roundInput = await InputView.readRoundCount();
    RoundCountValidator.validateInput(roundInput);
    this.#roundCount = Number(roundInput.trim());

    // RacingGame 객체 생성
    this.#game = new RacingGame(carNames);
  }

  async #playGame() {
    for (let i = 0; i < this.#roundCount; i++) {
      this.#game.playRound();
      OutputView.printRoundResult(this.#game.getCars());
    }
  }

  #announceWinner() {
    const winners = this.#game.getWinners();
    OutputView.printWinners(winners);
  }
}

export default App;
