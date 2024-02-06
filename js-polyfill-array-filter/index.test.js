import { arrayFilter } from "./index.js";

describe("Array.filter Polyfill", () => {
  // Write your tests here

  test('The polyfill filters elements of an array based on a condition.', () => {
    const MOCK_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filter = arrayFilter(MOCK_DATA, (n) => n % 2 === 0);
    expect(filter).toEqual([2, 4, 6, 8]);
  });

  test('The polyfill handles empty arrays without throwing errors.', () => {
    const MOCK_DATA = [];
    const filter = arrayFilter(MOCK_DATA, () => true);
    expect(filter).toEqual([]);
  });

  test('The polyfill filters based on a condition that always evaluates to true.', () => {
    const MOCK_DATA = [1, 2, 3, 4, 5];
    const filter = arrayFilter(MOCK_DATA, () => true);
    expect(filter).toEqual(MOCK_DATA);
  });

  test('The polyfill filters based on a condition that always evaluates to false.', () => {
    const MOCK_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filter = arrayFilter(MOCK_DATA, () => false);
    expect(filter).toEqual([]);
  });

  test('The polyfill filters an array of objects based on a property value.', () => {
    const MOCK_DATA = [
      { id: 1, name: 'Alice', age: 20 },
      { id: 2, name: 'Bob', age: 23 },
      { id: 3, name: 'Charlie', age: 22 },
      { id: 4, name: 'David', age: 21 },
      { id: 5, name: 'Michael', age: 20 },
    ];
    const filter = arrayFilter(MOCK_DATA, (p) => p.age === 20);
    expect(filter).toEqual([
      { id: 1, name: 'Alice', age: 20 },
      { id: 5, name: 'Michael', age: 20 },
    ]);
  });

  test('The polyfill filters an array with negative indices.', () => {
    const MOCK_DATA = [1, 2, 3, 4, 5];
    const filter = arrayFilter(MOCK_DATA, (_, index) => index < 3 || index > 3);
    expect(filter).toEqual([1, 2, 3, 5]);
  });

});
