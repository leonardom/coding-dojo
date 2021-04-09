const fizzbuzz = require('./fizzbuzz');

test('expect fizzbuzz(1) to return 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});

test('expect fizzbuzz(2) to return 2', () => {
  expect(fizzbuzz(2)).toBe(2);
});

test('expect fizzbuzz(3) to return fizz', () => {
  expect(fizzbuzz(3)).toBe("fizz");
});

test('expect fizzbuzz(4) to return 4', () => {
  expect(fizzbuzz(4)).toBe(4);
});

test('expect fizzbuzz(5) to return buzz', () => {
  expect(fizzbuzz(5)).toBe("buzz");
});

test('expect fizzbuzz(15) to return fizzbuzz', () => {
  expect(fizzbuzz(15)).toBe("fizzbuzz");
});

test('expect fizzbuzz(20) to return buzz', () => {
  expect(fizzbuzz(20)).toBe("buzz");
});

test('expect fizzbuzz(30) to return fizzbuzz', () => {
  expect(fizzbuzz(30)).toBe("fizzbuzz");
});