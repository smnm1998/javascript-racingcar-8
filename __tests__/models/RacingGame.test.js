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

  describe('라운드 실행', () => {
    test('한 라운드를 실행하면 모든 차가 이동 시도한다.', () => {
      const mockRandomGenerator = () => [5, 3]; // pobi 전진, woni 정지
      const game = new RacingGame(['pobi', 'woni'], mockRandomGenerator);

      game.playRound();
      const cars = game.getCars();

      expect(cars[0].getPosition()).toBe(1);
      expect(cars[1].getPosition()).toBe(0);
    });

    test('여러 라운드를 실행할 수 있다.', () => {
      const randomValues = [
        [5, 4],
        [3, 5],
        [5, 3],
      ];
      let callCount = 0;
      const mockRandomGenerator = () => randomValues[callCount++];

      const game = new RacingGame(['pobi', 'woni'], mockRandomGenerator);

      game.playRound(); // 둘 다 전진
      game.playRound(); // woni만 전진
      game.playRound(); // pobi만 전진

      const cars = game.getCars();
      expect(cars[0].getPosition()).toBe(2); // pobi
      expect(cars[1].getPosition()).toBe(2); // woni
    });
  });

  describe('우승자 판정', () => {
    test('동점자가 있으면 공동 우승자다.', () => {
      const randomValues = [
        [5, 1, 7],
        [4, 3, 4],
      ];
      let callCount = 0;
      const mockRandomGenerator = () => randomValues[callCount++];

      const game = new RacingGame(['pobi', 'woni', 'jun'], mockRandomGenerator);

      game.playRound(); // pobi, jun 전진
      game.playRound(); // pobi, jun 전진

      const winners = game.getWinners();

      expect(winners).toHaveLength(2);
      expect(winners[0].getName()).toBe('pobi');
      expect(winners[1].getName()).toBe('jun');
    });
  });

  test('아무도 전진하지 않았을 때 모두 우승자다', () => {
    const game = new RacingGame(['pobi', 'woni']);
    const winners = game.getWinners();
    expect(winners).toHaveLength(2);
  });
});
