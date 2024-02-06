import { flattenObject } from "./index";

test("Empty Object", () => {
  expect(flattenObject({})).toBe("");
});


test("Normal key value pair", () => {
  expect(flattenObject({
  "firstName": "John",
  "lastName": "Doe",
  "age": "49"
})).toBe(`
firstName: John
lastName: Doe
age: 49`);
});


test("Object inside key", () => {
  expect(flattenObject({
  "id": "123",
  "name": {
    "firstName": "John",
    "lastName": "Doe",
  },
  "age": "49",
})).toBe(`
id: 123
name:
firstName: John
lastName: Doe
age: 49`);
});