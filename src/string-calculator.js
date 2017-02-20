'use strict';

export default class StringCalculator {
  static calculate(string) {
    if (string) {
      return this.checkForNegatives(string);
    } else {
      return 0;
    }
  }

  static checkForNegatives(string) {
    if (string.includes('-')) {
      throw new Error("negatives not allowed: " + string.match(/(-)\d+/g));
    } else {
      const numbers = this.removeDelimeter(string);
      let sum = 0;

      numbers.forEach((number) => {
        sum += parseInt(number);
      });
      return sum;
    }
  }

  static removeDelimeter(string) {
    return string.match(/\d+/g);
  }
}
