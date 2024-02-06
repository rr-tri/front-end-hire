import { arrayAt } from "./index.js";

describe("Array.at Polyfill", () => {
  // Write your tests here
  const MOCK_ARRAY = ["first","second","third","fourth","fifth","sixth","seventh","eight","ninth"];
  test("The method returns the correct item for a positive index.",()=>{
    expect(arrayAt(MOCK_ARRAY,3)).toBe("fourth");
  });

  test("The method returns the correct item for a negative index.",()=>{
    expect(arrayAt(MOCK_ARRAY,-3)).toBe("seventh");
  });
  test("The method returns undefined for an index that is out of the array's bounds.",()=>{
    expect(arrayAt(MOCK_ARRAY,-30)).toBe(undefined);
  });
});
