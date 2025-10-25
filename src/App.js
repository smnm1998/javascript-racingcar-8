import { Random } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import CarNameValidator from './validators/CarNameValidator.js';
import RoundCountValidator from './validators/RoundCountValidator.js';
import RacingGame from './models/RacingGame.js';

class App {
  #game;
  #roundCount;

  async run() {
    try {
      await this.#setupGame();
      await this.#playGame();
      this.#announceWinner();
    } catch (error) {
      OutputView.printError(error.message);
      await this.run();
    }
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
      const randomValues = this.#generateRandomValues();
      this.#game.playRound(randomValues);
      OutputView.printRoundResult(this.#game.getCars());
    }
  }

  #announceWinner() {
    const winners = this.#game.getWinners();
    OutputView.printWinners(winners);
  }

  #generateRandomValues() {
    const carCount = this.#game.getCars().length;
    return Array.from({ length: carCount }, () =>
      Random.pickNumberInRange(0, 9),
    );
  }
}

export default App;
