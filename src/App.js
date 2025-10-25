import { Random } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import CarNameValidator from './validators/CarNameValidator.js';
import RoundCountValidator from './validators/RoundCountValidator.js';
import RacingGame from './models/RacingGame.js';

class App {
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
}

export default App;
