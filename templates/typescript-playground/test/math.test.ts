import { add } from '../src/modules/math';

describe('add', () => {
  test('should add two numbers', () => {
    expect(add(3, 4)).toEqual(7);
  });
});
