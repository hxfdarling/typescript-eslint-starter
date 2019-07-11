import { greeter } from './utils/utils';

test('greeter returns Hello friend!', () => {
  expect(greeter('friend')).toBe('Hello friend!');
});
