'use strict';

export default class StringCalculator {
  static calculate(string) {
    if (string) {
      return this.sum(string);
    } else {
      return 0;
    }
  }

  static sum(string) {
    if (this.containsNegatives(string)) {
      return "negatives not allowed: " + string.match(/(-)\d+/g);
    } else {
      const numbers = this.removeDelimeter(string);
      let sum = 0;

      numbers.forEach((number) => {
        sum += parseInt(number);
      });
      return sum;
    }
  }

  static containsNegatives(string) {
    if (string.includes('-')) {
      return true;
    } else {
      return false;
    }
  }

  static removeDelimeter(string) {
    return string.match(/\d+/g);
  }
}
