import StringCalculator from '../src/string-calculator.js';

describe('<StringCalculator />', () => {
  context('where commas are the only delimeters', () => {
    it('returns 0 if no numbers are given', () => {
      expect(StringCalculator.calculate("")).to.eq(0);
    });

    it('returns correct int if given a single number string', () => {
      expect(StringCalculator.calculate("3")).to.eq(3);
    });

    it('returns correct int if given a two number string', () => {
      expect(StringCalculator.calculate("3,2")).to.eq(5);
    });

    it('returns correct int if given any amount of numbers', () => {
      expect(StringCalculator.calculate("3,0,2,16,234,0")).to.eq(255);
    });
  });

  context('where new lines are the only delimeters', () => {
    expect(StringCalculator.calculate("3\n2\n10")).to.eq(15);
  });

  // context('where anything can be a delimeter', () => {
  //   expect(StringCalculator.calculate("//;n1;2")).to.eq(3);
  //   expect(StringCalculator.calculate("3/4/3")).to.eq(10);
  // });
  //
  // context('where negative numbers are included', () => {
  //   it('throws an exception', () => {
  //     expect(StringCalculator.calculate("-2,-4")).to.eq("negatives not allowed: -2, -4");
  //   });
  // });
});
