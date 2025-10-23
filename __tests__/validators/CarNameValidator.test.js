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
    test.each([[''], [' '], ['   '], ['    ']])(
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
          '[ERROR] 자동차 이름은 5자를 초과할 수 없습니다!',
        );
      },
    );
  });
});
