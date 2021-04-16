'use strict';

const { getRuleLevel } = require('./level');

test('find all issue level formats', () => {
  expect(getRuleLevel('error')).toBe('error');
  expect(getRuleLevel(['error'])).toBe('error');
  expect(getRuleLevel('2')).toBe('error');
  expect(getRuleLevel(['2'])).toBe('error');
  expect(getRuleLevel(['2', 'something', 'something'])).toBe('error');
  expect(getRuleLevel(2)).toBe('error');
  expect(getRuleLevel([2, 'something', 'something'])).toBe('error');
});

test('find all issue levels', () => {
  expect(getRuleLevel(0)).toBe('off');
  expect(getRuleLevel(1)).toBe('warn');
  expect(getRuleLevel(2)).toBe('error');
});
