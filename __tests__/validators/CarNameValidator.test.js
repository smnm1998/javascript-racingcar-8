import CarNameValidator from '../../src/validators/CarNameValidator';

describe('CarNameValidator', () => {
  describe('validate - 정상 케이스', () => {
    test.each([['a'], ['ab'], ['abc'], ['abcd'], ['abcde']])(
      '5자 이하 이름("%s")은 에러를 발생시키지 않는다.',
      (name) => {
        expect(() => CarNameValidator.validate(name)).not.toThrow();
      },
    );
  });

  describe('validate - 예외 케이스', () => {
    test.each([[''], [' '], ['  '], ['   ']])(
      '빈 문자열이나 공백("%s")은 에러를 발생시킨다.',
      (name) => {
        expect(() => CarNameValidator.validate(name)).toThrow(
          '[ERROR] 자동차 이름을 제대로 명시해주세요!',
        );
      },
    );

    test.each([['abcdef'], ['toolong'], ['verylong'], ['verylongname']])(
      '5자 초과한 이름("%s")은 에러를 발생시킨다.',
      (name) => {
        expect(() => CarNameValidator.validate(name)).toThrow(
          '[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다!',
        );
      },
    );
  });

  describe('validate - 여러 이름 검증', () => {
    test('쉼표로 구분된 여러 이름을 검증한다', () => {
      const input = 'pobi,woni,jun';
      // not을 붙여서 정상 케이스는 에러가 발생하지 않도록 함
      expect(() => CarNameValidator.validateAll(input)).not.toThrow();
    });

    test('하나라도 5자를 초과하면 에러를 발생시킨다', () => {
      const input = 'pobi,toolong,jun';
      expect(() => CarNameValidator.validateAll(input)).toThrow(
        '[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다!',
      );
    });

    test('빈 문자열이 포함되면 에러를 발생시킨다.', () => {
      const input = 'pobi, ,jun';
      expect(() => CarNameValidator.validateAll(input)).toThrow(
        '[ERROR] 자동차 이름을 제대로 명시해주세요!',
      );
    });
  });
});
