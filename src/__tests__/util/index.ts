import { greeter } from '../../util';

test('greeter returns Hello friend!', () => {
  expect(greeter('friend')).toBe('Hello friend!');
});
