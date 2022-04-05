import { notDeepEqual } from 'assert';
import {
	login,
  unsubscribeFromEmailList,
  canPurchase,
  runThermostat,
  convertArrayToDoublyLinkedNodes
} from '../index'

test('Expects login to succeed with "johndoe" and "password"', () => {
  expect(login({username: "johndoe", password: "password"})).toBe(true);
});

test('Expects login to fail with "jane" and "password"', () => {
  expect(login({username: "jane", password: "password"})).toBe(false);
});

test('Expects login to fail with malformed object', () => {
  expect(login({})).toBe(false);
});


test('Expects unsubscribe to work with empty object', () => {
  expect(unsubscribeFromEmailList({})).toBe({isSubscribedToEmailList: false});
});

test('Expects unsubscribe to work with complex object', () => {
  expect(unsubscribeFromEmailList({username: "johndoe", password: "password", isSubscribedToEmailList: true})).toBe({username: "johndoe", password: "password", isSubscribedToEmailList: false});
});


test('Expects canPurchase to work with simple user', () => {
  expect(canPurchase({age: 8}, "fruit")).toBe(true);
});

test('Expects canPurchase to work with complex user', () => {
  expect(canPurchase({age: 8, username: "johndoe", password: "password"}, "fruit")).toBe(true);
});

test('Expects canPurchase fail when buying Alcohol underage', () => {
  expect(canPurchase({age: 8, username: "johndoe", password: "password"}, "Alcohol")).toBe(false);
});

test('Expects canPurchase fail when buying Cigarettes underage', () => {
  expect(canPurchase({age: 8, username: "johndoe", password: "password"}, "Cigarettes")).toBe(false);
});

test('Expects canPurchase work when buying Alcohol of age', () => {
  expect(canPurchase({age: 21, username: "johndoe", password: "password"}, "Alcohol")).toBe(true);
});

test('Expects canPurchase work when buying Cigarettes of age', () => {
  expect(canPurchase({age: 19, username: "johndoe", password: "password"}, "Cigarettes")).toBe(true);
});


test('Expects runThermostat to turn on heater when below threshold', () => {
  const thermostat = runThermostat(65);
  expect(thermostat.isHeaterOn).toEqual(true);
  expect(thermostat.isCoolerOn).toEqual(false);
});

test('Expects runThermostat to turn on cooler when above threshold', () => {
  const thermostat = runThermostat(75);
  expect(thermostat.isHeaterOn).toEqual(false);
  expect(thermostat.isCoolerOn).toEqual(true);
});

test('Expects runThermostat to turn neither on when at desiredTemp', () => {
  const thermostat = runThermostat(69);
  expect(thermostat.isHeaterOn).toEqual(false);
  expect(thermostat.isCoolerOn).toEqual(false);
});


test('Expects convertArrayToDoublyLinkedNodes to create a doubly linked node list', () => {
  let node = convertArrayToDoublyLinkedNodes([0, 1, 2, 3, 4, 5]);

  // Traverse nodes forward
  for(let i = 0; i < 6; i++){
    expect(node.value).toBe(i);
    expect(node.prev).not.toBe(null);
    expect(node.next).not.toBe(null);
    node = node.next;
  }

    // Traverse nodes backward
    for(let i = 5; i >= 0; i--){
      expect(node.value).toBe(i);
      expect(node.prev).not.toBe(null);
      expect(node.next).not.toBe(null);
      node = node.prev;
    }
});


