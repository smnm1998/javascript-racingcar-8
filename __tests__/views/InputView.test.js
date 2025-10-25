import { Console } from '@woowacourse/mission-utils';
import InputView from '../../src/views/InputView.js';

/**
  Mock(모의 객체)을 사용하는 이유:

    - 테스트 시 실제로 콘솔 입력을 받으면 테스트가 멈춤
    - Mock을 사용하면 입력값을 미리 설정하여 자동 테스트 가능
    - jest.spyOn(): 함수 호출을 감시
    - mockResolvedValue(): Promise를 반환하는 함수의 반환값 설정
**/

describe('InputView', () => {
  let readLineSpy;

  afterEach(() => {
    readLineSpy?.mockRestore();
  });

  test('자동차 이름 입력을 받는다.', async () => {
    // Console.readLineAsync를 Mock으로 대체
    readLineSpy = jest
      .spyOn(Console, 'readLineAsync')
      .mockResolvedValue('pobi,woni,jun');
    const result = await InputView.readCarNames();

    // 반환값이 Mock에서 설정한 값과 일치하는지 확인
    expect(result).toBe('pobi,woni,jun');

    // readLineAsync가 정확히 1번 호출되었는지 확인
    expect(readLineSpy).toHaveBeenCalledTimes(1);
  });

  test('시도 횟수 입력을 받는다.', async () => {
    readLineSpy = jest.spyOn(Console, 'readLineAsync').mockResolvedValue('5');
    const result = await InputView.readRoundCount();
    expect(result).toBe('5');
    expect(readLineSpy).toHaveBeenCalledTimes(1);
  });
});
