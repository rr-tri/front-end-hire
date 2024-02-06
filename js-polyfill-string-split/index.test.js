import { stringSplit } from "./index.js";

describe("String.split Polyfill", () => {
  // Write your tests here
  test('calling without separator', () => {

    expect(stringSplit('This is a javascript program test.')).toEqual(["This is a javascript program test."])
  })
  test('calling with "" separator', () => {

    expect(stringSplit('This is a javascript program test.', "")).toEqual(
      [
        "T",
        "h",
        "i",
        "s",
        " ",
        "i",
        "s",
        " ",
        "a",
        " ",
        "j",
        "a",
        "v",
        "a",
        "s",
        "c",
        "r",
        "i",
        "p",
        "t",
        " ",
        "p",
        "r",
        "o",
        "g",
        "r",
        "a",
        "m",
        " ",
        "t",
        "e",
        "s",
        "t",
        "."
      ])
  })
  test('calling " " separator', () => {
    expect(stringSplit('This is a javascript program test.', " ",)).toEqual(["This", "is", "a", "javascript", "program", "test."])
  })
  test('calling "\," separator', () => {
    expect(stringSplit('This is a javascript,jest program test.', ",")).toEqual(["This is a javascript", "jest program test."])
  })
  test('calling " " separator and limit 2', () => {
    expect(stringSplit('This is a javascript program test.', " ",2)).toEqual(["This", "is"])
  })
  test('calling " " separator and limit -20', () => {
    expect(stringSplit('This is a javascript program test.', " ",-20)).toEqual(["This", "is", "a", "javascript", "program", "test."])
  })
  test('calling " " separator and limit 0', () => {
    expect(stringSplit('This is a javascript program test.', " ",0)).toEqual([])
  })
});
