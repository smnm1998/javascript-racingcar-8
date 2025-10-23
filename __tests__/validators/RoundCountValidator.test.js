describe('RoundCountValidator', () => {
  describe('validate - 정상 케이스', () => {
    test.each([[1], [5], [10], [50], [100]])(
      '1회 이상 100회 이하의 횟수(%i)는 에러를 발생시키지 않는다.',
      (count) => {
        expect(() => RoundCountValidator.validate(count)).not.toThrow();
      },
    );
  });

  describe('validate - 예외 케이스', () => {
    test.each([[0], [-1], [-10]])(
      '1회 미만의 횟수(%i)는 에러를 발생시킨다.',
      (count) => {
        expect(() => RoundCountValidator.validate(count)).toThrow(
          '[ERROR] 게임 시작은 최소 1회부터 가능합니다!',
        );
      },
    );

    test.each([[101], [500], [1000]])(
      '100회 초과의 횟수(%i)는 에러를 발생시킨다.',
      (count) => {
        expect(() => RoundCountValidator.validate(count)).toThrow(
          '[ERROR] 100 라운드를 초과할 수는 없습니다.',
        );
      },
    );

    test.each([['abc'], [''], ['    '], ['12.5'], ['NaN']])(
      '숫자가 아닌 값("%s")은 에러를 발생시킨다.',
      (input) => {
        expect(() => RoundCountValidator.validateInput(input)).toThrow(
          '[ERROR] 라운드는 숫자로 입력하셔야 합니다!',
        );
      },
    );
  });

  describe('validateInput - 문자열 입력 검증', () => {
    test.each([['1'], ['10'], ['50'], ['100']])(
      '숫자 문자열("%s")는 파싱하여 검증한다.',
      (input) => {
        expect(() => RoundCountValidator.validateInput(input)).not.toThrow();
      },
    );

    test('공백이 포함된 숫자 문자열은 trim하여 검증한다.', () => {
      expect(() => RoundCountValidator.validateInput('   10   ')).not.toThrow();
    });

    test.each([['0'], ['101'], ['-1'], ['abc'], ['']])(
      '잘못된 문자열("%s")은 에러를 발생시킨다.',
      (input) => {
        expect(() => RoundCountValidator.validateInput(input)).toThrow(
          '[ERROR] 라운드는 숫자로 입력하셔야 합니다!',
        );
      },
    );
  });
});
