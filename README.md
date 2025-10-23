# javascript-racingcar-precourse

## 0. 학습 목표

- 여러 역할을 수행하는 큰 함수를 단일 역할을 수행하는 작은 함수로 분리한다.
- 테스트 도구를 사용하는 방법을 배우고 프로그램이 제대로 작동하는지 테스트한다.
- 1주 차 공통 피드백(디스코드 참고)을 최대한 반영한다.

## 1. 구현 기능 목록

### 0. validator(검증)

> **validators/CarNameValidator, validators/RoundCountValidator**

- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.
  - _**CarNameValidator**_
    - `validate(carName)`: 단일 이름 검증
      - 이름이 공백이거나 빈 문자열일 경우 에러
      - 이름이 1자 미만 또는 5자 초과일 경우 에러
    - `validateAll(input)`: 여러 이름 검증
      - 쉼표(,)로 구분된 여러 이름을 각각 검증
      - 각 이름은 trim 처리 후 검증

  - _**RoundCountValidator**_
    - `validate(count)`: 숫자 범위 검증
      - 시도 횟수가 1회 미만일 경우 에러
      - 시도 횟수가 100회 초과일 경우 에러
    - `validateInput(input)`: 문자열 입력 파싱 및 검증
      - 입력값 trim 처리
      - 빈 문자열 검증
      - 숫자로 변환 가능 여부 검증
      - 정수 여부 검증
      - 변환된 숫자를 validate()로 범위 검증

### 1. input(입력)

> **views/InputView**

- '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
  - 이름은 5자 이하만 가능하다.
- 시도할 횟수는 몇 회인가요?

### 2. racingGame(자동차 경주)

> **models/Car, models/RacingGame, controllers/GameController**

- **Car**: 자동차 객체
  - 이름 저장 및 현재 위치 추적
  - 전진 조건: 0~9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 전진
    - 4 미만이면 정지
    - 4 이상이면 전진

- **RacingGame**: 경주 게임 관리
  - 여러 자동차 관리
  - 라운드 진행
  - 우승자 판별

- **GameController**: 게임 전체 흐름 제어

- 출력 예시

```bash
  # 전진 하기 전
  pobi:
  woni:

  # 전진 한 후
  pobi: -    # 1칸 전진
  woni:      # 멈춤

  pobi: --   # 2칸 전진
  woni: -    # 1칸 전진
```

### 3. output(출력)

> **views/OutputView**

- '최종 우승자 : '와 함께 최종 우승자를 출력
  - 우승자는 한 명 이상일 수 있다.
  - 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

## 2. 프로그래밍 요구사항

- 3항 연산자 사용 금지
- 단일 책임 원칙 지킬 것
- Jest 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인
- `woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현
  - Random 값 추출은 `Random.pickNumberInRange()`를 활용
  - 입력 및 출력은 `Console.readLineAsync()`와 `Console.print()`를 활용

## 3. 개인적인 목표

- MVC 아키텍처를 채택한다.
- TDD 개발을 진행해본다.
