import filter2tuple from '../src';

describe('api.basic', () => {
  test('01/Get even/odd use fn', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [even, odd] = filter2tuple(numbers, (item) => item % 2 === 0);
    expect(even).toEqual([2, 4, 6]);
    expect(odd).toEqual([1, 3, 5]);
  });

  test('02/Get even/odd use fn, only one condition', () => {
    const numbers = [1, 3, 5, 7];
    const [even, odd] = filter2tuple(numbers, (item) => item % 2 === 0);
    expect(even).toEqual([]);
    expect(odd).toEqual([1, 3, 5, 7]);
  });
});
