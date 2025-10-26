import { Random } from '@woowacourse/mission-utils';
import { GAME } from '../constants/game.js';
import Car from './Car.js';

class RacingGame {
  #cars;
  #randomGenerator;

  constructor(carNames, randomGenerator = null) {
    // 자동차 이름 배열을 받아서 Car객체를 생성
    this.#cars = carNames.map((name) => new Car(name));

    // 랜덤 생성 전략 주입 (기본값: 기본 랜덤 생성기)
    this.#randomGenerator =
      randomGenerator || this.#createDefaultRandomGenerator();
  }

  #createDefaultRandomGenerator() {
    return (count) =>
      Array.from({ length: count }, () => {
        return Random.pickNumberInRange(GAME.RANDOM.MIN, GAME.RANDOM.MAX);
      });
  }

  playRound() {
    // 랜덤값 생성 후 각 차에 전달하여 이동
    const randomValues = this.#randomGenerator(this.#cars.length);
    this.#cars.forEach((car, index) => {
      car.move(randomValues[index]);
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    // 가장 멀리 간 자동차 위치 탐색
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));

    // 최고 위치에 있는 차들만 탐색
    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }
}

export default RacingGame;
