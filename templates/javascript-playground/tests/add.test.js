import { Add } from '../src/Add/Add';

describe('add', () => {
  test('should add two numbers', () => {
    expect(Add(3, 4)).toEqual(7);
  });
});
