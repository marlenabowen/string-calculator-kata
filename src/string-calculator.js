'use strict';

export default class StringCalculator {
  static calculate(n) {
    if (n) {
      return this.checkForNegatives(n);
    } else {
      return 0;
    }
  }

  static checkForNegatives(n) {
    if (n.includes('-')) {
      const negatives = n.match(/(-)\d+/g);
      return "negatives not allowed: " + negatives;
    } else {
      return this.removeDelimeter(n);
    }
  }

  static removeDelimeter(n) {
    const array = n.match(/\d+/g);
    return this.sum(array);
  }

  static sum(array) {
    let result = 0;

    array.forEach((number) => {
      result += parseInt(number);
    });
    return result;
  }
}
