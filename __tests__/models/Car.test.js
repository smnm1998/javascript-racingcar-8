import Car from '../../src/models/Car.js';

describe('Car', () => {
  describe('자동차 생성 및 초기화', () => {
    test('자동차를 생성하면 초기 위치는 0이다.', () => {
      const car = new Car('pobi');
      expect(car.getPosition()).toBe(0);
    });

    test('자동차 이름을 가져올 수 있다.', () => {
      const car = new Car('pobi');
      expect(car.getName()).toBe('pobi');
    });
  });

  describe('이동 로직', () => {
    test('랜덤값이 4 이상이면 전진한다.', () => {
      const car = new Car('pobi');
      car.move(4);
      expect(car.getPosition()).toBe(1);
    });

    test('랜덤값이 4 미만이면 정지한다.', () => {
      const car = new Car('pobi');
      car.move(3);
      expect(car.getPosition()).toBe(0);
    });

    test('여러 번 전진할 수 있다.', () => {
      const car = new Car('pobi');
      car.move(4);
      car.move(5);
      car.move(9);
      expect(car.getPosition()).toBe(3);
    });

    test('전진과 정지를 반복할 수 있다.', () => {
      const car = new Car('pobi');
      car.move(4); // 전진 -> 1
      car.move(3); // 정지 -> 1
      car.move(5); // 전진 -> 2
      car.move(2); // 정지 -> 2
      expect(car.getPosition()).toBe(2);
    });
  });

  describe('경계값 테스트', () => {
    test('랜덤값이 정확히 4일 때 전진한다', () => {
      const car = new Car('pobi');
      car.move(4);
      expect(car.getPosition()).toBe(1);
    });

    test('랜덤값이 0일 때 전진하지 않는다.', () => {
      const car = new Car('pobi');
      car.move(0);
      expect(car.getPosition()).toBe(0);
    });

    test('랜덤값이 9일 때 전진한다.', () => {
      const car = new Car('pobi');
      car.move(9);
      expect(car.getPosition()).toBe(1);
    });
  });
});
