class CarNameValidator {
  static validate(carName) {
    if (!carName || carName.trim() === '') {
      throw new Error('[ERROR] 자동차 이름을 제대로 명시해주세요!');
    }

    if (carName < 1 || carName > 5) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다!');
    }
  }

  static validateAll(input) {
    const names = input.split(',').map((name) => name.trim());
    names.forEach((name) => this.validate(name));
  }
}

export default CarNameValidator;
