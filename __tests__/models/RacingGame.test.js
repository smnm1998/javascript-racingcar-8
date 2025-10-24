import RacingGame from '../../src/models/RacingGame.js';

describe('RacingGame', () => {
  describe('게임 초기화', () => {
    test('자동차 이름 배열로 게임을 생성한다.', () => {
      const game = new RacingGame(['pobi', 'woni', 'jun']);
      const cars = game.getCars();

      expect(cars).toHaveLength(3);
      expect(cars[0].getName()).toBe('pobi');
      expect(cars[1].getName()).toBe('woni');
      expect(cars[2].getName()).toBe('jun');
    });
  });

  test('생성된 모든 자동차의 초기 위치는 0이다.', () => {
    const game = new RacingGame(['pobi', 'woni']);
    const cars = game.getCars();

    expect(cars[0].getPosition()).toBe(0);
    expect(cars[1].getPosition()).toBe(0);
  });
});
