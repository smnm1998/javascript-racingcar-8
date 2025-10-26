import { CAR } from '../constants/car.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = CAR.POSITION.INITIAL; // 초기 위치
  }

  move(randomValue) {
    if (randomValue >= CAR.MOVE.THRESHOLD) {
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
