'use strict';

export default class StringCalculator {
  static calculate(n) {
    if (n) {
      return this.add(n);
    } else {
      return 0;
    }
  }

  static removeDelimeter(n) {
    let delimeter = '';
    if (n.includes(',')) {
      delimeter = ',';
    } else if (n.includes('\n')) {
      delimeter = '\n';
    }
    const array = n.split(delimeter);
    return array;
  }

  static add(n) {
    const array = this.removeDelimeter(n);
    let result = 0;

    array.forEach((number) => {
      result += parseInt(number);
    });
    return result;
  }
}
