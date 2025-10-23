describe('RoundCountValidator', () => {
  describe('validate - 정상 케이스', () => {
    test.each([[1], [5], [10], [50], [100]])(
      '1회 이상 100회 이하의 횟수(%i)는 에러를 발생시키지 않는다.',
      (count) => {
        RoundCountValidator.validate(count).not.toThrow();
      },
    );
  });

  describe('validate - 예외 케이스', () => {
    test.each([[0], [-1], [-10]])(
      '1회 미만의 횟수(%i)는 에러를 발생시킨다.',
      (count) => {
        RoundCountValidator.validate(count).toThrow(
          '[ERROR] 게임 시작은 최소 1회부터 가능합니다!',
        );
      },
    );

    test.each([[101], [500], [1000]])(
      '100회 초과의 횟수(%i)는 에러를 발생시킨다.',
      (count) => {
        RoundCountValidator.validate(count).toThrow(
          '[ERROR] 100 라운드를 초과할 수는 없습니다.',
        );
      },
    );
  });
});
