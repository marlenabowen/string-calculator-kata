'use strict';

export default class StringCalculator {
  static calculate(n) {
    if (n) {
      return this.sum(n);
    } else {
      return 0;
    }
  }

  static sum(n) {
    if (this.containsNegatives(n)) {
      const negatives = n.match(/(-)\d+/g);
      return "negatives not allowed: " + negatives;
    } else {
      const array = this.removeDelimeter(n);
      let result = 0;

      array.forEach((number) => {
        result += parseInt(number);
      });
      return result;
    }
  }

  static containsNegatives(n) {
    if (n.includes('-')) {
      return true;
    } else {
      return false;
    }
  }

  static removeDelimeter(n) {
    return n.match(/\d+/g);
  }
}
