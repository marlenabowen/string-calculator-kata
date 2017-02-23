'use strict';

export default class StringCalculator {
  static sum(inputString) {
    if (!inputString) { return 0; }
    this.handleNegatives(inputString);

    const numbers = this.processInput(inputString);
    return numbers.reduce((sum, number) => {
      return sum + number;
    }, 0);
  }

  static processInput(inputString) {
    const stringNumbers = inputString.match(/\d+/g);
    return stringNumbers.map((stringNumber) => parseInt(stringNumber));
  }

  static handleNegatives(inputString) {
    const negatives = inputString.match(/(-)\d+/g);
    if (negatives) {
      throw new Error("negatives not allowed: " + negatives);
    }
  }
}
