class RacingGame {
  #cars;

  constructor(carNames) {
    // 자동차 이름 배열을 받아서 Car객체를 생성
    this.#cars = carNames.map((name) => new Car(name));
  }

  playRound(randomValues) {
    // 각 차에 랜덤값 전달하여 이동시킴
    // move(): 4 이상이면 전진
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
