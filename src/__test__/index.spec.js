const mr = require('../index');

test('name equals "Marc Radziwill"', () => {
  expect(mr.name).toBe('Marc Radziwill');
});
test('email equals "hallo@marcradziwill.com"', () => {
  expect(mr.email).toBe('hallo@marcradziwill.com');
});
test('company equals "marc radziwill."', () => {
  expect(mr.company).toBe('marc radziwill.');
});