describe('tdd-home.spec.js -> positiveSum -> should find sum of positive number in array', function() {

  it('Base test', function() {
    expect(positiveSum([1,2,3,4,5])).toBe(15);
    expect(positiveSum([1,-2,3,4,5])).toBe(13);
    expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
  });

  it('In case when array is empty should return 0', function() {
    expect(positiveSum([])).toBe(0);
  });

});

describe('tdd-home.spec.js -> evenOrOdd -> should return strings \'Even\' or  \'Odd\'', function() {
  it('Base test', function() {
    expect(evenOrOdd(3456)).toBe('Even');
    expect(evenOrOdd(653)).toBe('Odd');
  });
});


describe('tdd-home.spec.js -> centuryFromYear -> Input: year, output: century', function() {
  it('Base test', function() {
    expect(centuryFromYear(1765)).toBe(18);
    expect(centuryFromYear(45)).toBe(1);
    expect(centuryFromYear(2019)).toBe(21);
  });
});



