import {
	nameFunction,
	numberFunction,
	booleanFunction
} from '../index'

test('Expects nameVar to be Jane', () => {
  expect(nameFunction()).toBe("Jane");
});

test('Expects numberVar to be 1.01', () => {
  expect(numberFunction()).toBe(1.01);
});

test('Expects booleanVar to be false', () => {
  expect(booleanFunction()).toBe(false);
});