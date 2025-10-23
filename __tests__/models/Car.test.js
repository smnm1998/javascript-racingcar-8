describe('Car', () => {
  describe('자동차 생성 및 초기화', () => {
    test('자동차를 생성하면 초기 위치는 0이다', () => {
      const car = new Car('pobi');
      expect(car.getPosition()).toBe(0);
    });

    test('자동차 이름을 가져올 수 있다.', () => {
      const car = new Car('pobi');
      expect(car.getName()).toBe('pobi');
    });
  });
});
