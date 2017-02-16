import StringCalculator from '../src/string-calculator.js';

describe.only('<StringCalculator />', () => {
  it('returns 0 if no numbers are given', () => {
    expect(StringCalculator.add('')).to.eq(0);
  });

  it('returns correct int if given a single number string', () => {
    expect(StringCalculator.add('3')).to.eq(3);
  });

  it('returns correct int if given a two number string', () => {
    expect(StringCalculator.add('3,2')).to.eq(5);
  });
});
