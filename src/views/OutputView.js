import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printStart() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
  }

  static printRoundPrompt() {
    Console.print('시도할 횟수는 몇 회인가요?');
  }

  static printResultStart() {
    Console.print('\n실행 결과');
  }

  static printRoundResult(cars) {
    cars.forEach((car) => {
      const position = '-'.repeat(car.getPosition());
      Console.print(`${car.getName()} : ${position}`);
    });
    Console.print(''); // 빈 줄
  }

  static printWinners(winners) {
    const winnerNames = winners.map((winner) => winner.getName()).join(', ');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }

  static printError(message) {
    Console.print(message);
  }
}

export default OutputView;
