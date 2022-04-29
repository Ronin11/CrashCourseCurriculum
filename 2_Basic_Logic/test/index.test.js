import {
	nameFunction,
	numberFunction,
	booleanFunction
} from '../index'

test('Expects nameVar to be John when switchingVar is false', () => {
  expect(nameFunction(false)).toBe("John");
});

test('Expects nameVar to be Jane when switchingVar is true', () => {
  expect(nameFunction(true)).toBe("Jane");
});

test('Expects booleanVar to be true when switchingVar is false', () => {
  expect(booleanFunction(false)).toBe(true);
});

test('Expects booleanVar to be false when switchingVar is true', () => {
  expect(booleanFunction(true)).toBe(false);
});

test('Expects lessThanZeroFunction to be true when num is -100', () => {
  expect(lessThanZeroFunction(-100)).toBe(true);
});

test('Expects lessThanZeroFunction to be false when num is 1.01', () => {
  expect(lessThanZeroFunction(1.01)).toBe(false);
});

test('Expects numberVar to be 123 when switchingVar is false', () => {
  expect(numberFunction(false)).toBe(123);
});

test('Expects numberVar to be 1.01 when switchingVar is true', () => {
  expect(numberFunction(true)).toBe(1.01);
});
