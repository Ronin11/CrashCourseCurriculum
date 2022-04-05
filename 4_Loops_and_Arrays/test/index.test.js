import {
	maxNumber,
	containsZero,
	arraySum,
  fibonnaciFunction
} from '../index'

test('Expects maxNumber to be 11', () => {
  expect(maxNumber([11])).toBe(11);
});

test('Expects maxNumber to be 50', () => {
  expect(maxNumber([0,10,20,50,30])).toBe(50);
});

test('Expects maxNumber to be -1', () => {
  expect(maxNumber([-100,-10,-20,-50,-30, -1])).toBe(-1);
});


test('Expects containsZero to be true with basic array', () => {
  expect(containsZero([0])).toBe(true);
});

test('Expects containsZero to be false with basic array', () => {
  expect(containsZero([1])).toBe(false);
});

test('Expects containsZero to be true with complex array', () => {
  expect(containsZero([1, 1, 1, 1, 2, 0])).toBe(true);
});

test('Expects containsZero to be false with complex array', () => {
  expect(containsZero([1, 1, 1, 1, 2, 3])).toBe(false);
});



test('Expects arraySum to be [10]', () => {
  expect(arraySum([8], [2])).toEqual([10]);
});

test('Expects arraySum to be [0, 2, 4, 6, 8, 10]', () => {
  expect(arraySum([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual([0, 2, 4, 6, 8, 10]);
});


test('Expects fibonnaciFunction of 5 to be 5', () => {
  expect(fibonnaciFunction(5)).toBe(5);
});

test('Expects fibonnaciFunction of 12 to be 144', () => {
  expect(fibonnaciFunction(12)).toBe(144);
});

test('Expects fibonnaciFunction of 24 to be 46368', () => {
  expect(fibonnaciFunction(24)).toBe(46368);
});





