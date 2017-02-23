import StringCalculator from '../src/string-calculator.js';

describe('<StringCalculator />', () => {
  context('where commas are the only delimeters', () => {
    it('returns 0 if no numbers are given', () => {
      expect(StringCalculator.sum("")).to.eq(0);
    });

    it('returns correct int if given a single number string', () => {
      expect(StringCalculator.sum("3")).to.eq(3);
    });

    it('returns correct int if given a two number string', () => {
      expect(StringCalculator.sum("3,2")).to.eq(5);
    });

    it('returns correct int if given any amount of numbers', () => {
      expect(StringCalculator.sum("3,0,2,16,234,0")).to.eq(255);
    });
  });

  context('where new lines are the only delimeters', () => {
    it('sums the numbers correctly', () => {
      expect(StringCalculator.sum("3\n2\n10")).to.eq(15);
    });
  });

  context('where anything can be a delimeter', () => {
    it('sums the numbers correctly', () => {
      expect(StringCalculator.sum("3;n14/3")).to.eq(20);
    });
  });

  context('where negative numbers are included', () => {
    it('throws an exception', () => {
      expect(() => StringCalculator.sum("-21,12,-4,3")).to.throw("negatives not allowed: -21,-4");
    });
  });
});
