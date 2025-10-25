import { Console } from '@woowacourse/mission-utils';
import OutputView from '../../src/views/OutputView.js';

describe('OutputView', () => {
  let logSpy;

  beforeEach(() => {
    // Console.print를 spy로 감시
    logSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  // 각 테스트 후 spy 정리
  beforeEach(() => {
    logSpy.mockRestore();
  });

  test('게임 시작 메시지를 출력한다.', () => {
    OutputView.printStart();
    expect(logSpy).toHaveBeenCalledWith('경주할 자동차 이름을 입력하세요.');
  });

  test('라운드 결과를 출력한다.', () => {
    const cars = [
      { getName: () => 'pobi', getPosition: () => 3 },
      { getName: () => 'woni', getPosition: () => 1 },
    ];

    OutputView.printRoundResult(cars);

    expect(logSpy).toHaveBeenCalledWith('pobi : ---');
    expect(logSpy).toHaveBeenCalledWith('woni : -');
  });

  test('우승자를 출력한다.', () => {
    const winners = [{ getName: () => 'pobi' }, { getName: () => 'jun' }];

    OutputView.printWinners(winners);
    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi, jun');
  });
});
