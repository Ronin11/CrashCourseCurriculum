import {
	addFunction,
	validAgeFunction,
	squareFunction
} from '../index'

test('Expects addFunction to be 3', () => {
  expect(addFunction()).toBe(3);
});

test('Expects validAgeFunction to be true with 21 and "Alcohol" parameters', () => {
  expect(validAgeFunction(21, "Alcohol")).toBe(true);
});

test('Expects validAgeFunction to be false with 18 and "Alcohol" parameters', () => {
  expect(validAgeFunction(18, "Alcohol")).toBe(false);
});

test('Expects validAgeFunction to be true with 19 and "Cigarettes" parameters', () => {
  expect(validAgeFunction(19, "Cigarettes")).toBe(true);
});

test('Expects validAgeFunction to be false with 15 and "Cigarettes" parameters', () => {
  expect(validAgeFunction(15, "Cigarettes")).toBe(false);
});

test('Expects squareFunction to be 25 with 5 as the parameter', () => {
  expect(squareFunction(5)).toBe(25);
});

test('Expects squareFunction to be 49 with 7 as the parameter', () => {
  expect(squareFunction(7)).toBe(49);
});