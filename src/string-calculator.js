'use strict';

export default class StringCalculator {
  static add(n) {
    let array = n.split(',');
    let result;

    if (n) {
      array.forEach(number, () => {
        result += number;
      )};
      return result - '';
    } else {
      return 0;
    }
  }
}
