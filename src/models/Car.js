class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0; // 초기 위치
  }

  move(randomValue) {
    if (randomValue >= 4) {
      this.#position++;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;
