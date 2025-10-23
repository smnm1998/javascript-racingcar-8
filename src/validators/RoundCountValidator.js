class RoundCountValidator {
  static validate(count) {
    if (count < 1) {
      throw new Error('[ERROR] 게임 시작은 최소 1회부터 가능합니다!');
    }

    if (count > 100) {
      throw new Error('[ERROR] 100 라운드를 초과할 수는 없습니다.');
    }
  }
}

export default RoundCountValidator;
