import { GAME } from '../constants/game.js';

class RoundCountValidator {
  static validate(count) {
    if (count < GAME.ROUND.MIN) {
      throw new Error('[ERROR] 게임 시작은 최소 1회부터 가능합니다!');
    }

    if (count > GAME.ROUND.MAX) {
      throw new Error('[ERROR] 100 라운드를 초과할 수는 없습니다.');
    }
  }

  static validateInput(input) {
    const trimmed = input.trim();

    if (trimmed === '') {
      throw new Error('[ERROR] 빈 문자열은 입력할 수 없습니다!');
    }

    const count = Number(trimmed);

    if (isNaN(count) || !Number.isInteger(count)) {
      throw new Error('[ERROR] 라운드는 숫자로 입력하셔야 합니다!');
    }

    this.validate(count);
  }
}

export default RoundCountValidator;
