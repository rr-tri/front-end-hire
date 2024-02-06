import { filterBy } from "./index";

const MOCK_DATA = [
  {
    id: 1,
    name: "Michael",
    email: "michael@example.com",
  },
  {
    id: 2,
    name: "Emily",
    email: "emily@example.com",
  },
  {
    id: 3,
    name: "David",
    email: "david@example.com",
  },
  {
    id: 4,
    name: "Sarah",
    email: "sarah@example.com",
  },
  {
    id: 5,
    name: "Daniel",
    email: "daniel@example.com",
  },
  {
    id: 6,
    name: "Jessica",
    email: "jessica@example.com",
  },
  {
    id: 7,
    name: "Brian",
    email: "brian@example.com",
  },
  {
    id: 8,
    name: "Amy",
    email: "amy@example.com",
  },
  {
    id: 9,
    name: "Matthew",
    email: "matthew@example.com",
  },
  {
    id: 10,
    name: "Olivia",
    email: "olivia@example.com",
  },
];

describe("filterBy function tests", () => {
  test("Filter by name 'Michael'", () => {
    const filterByName = filterBy("name");
    const results = filterByName("Michael")(MOCK_DATA);
    expect(results).toEqual([
      { id: 1, name: "Michael", email: "michael@example.com" },
    ]);
  });

  test("Filter by email 'emily@example.com'", () => {
    const filterByEmail = filterBy("email");
    const results = filterByEmail("emily@example.com")(MOCK_DATA);
    expect(results).toEqual([
      { id: 2, name: "Emily", email: "emily@example.com" },
    ]);
  });

  test("Filter by non-existent name should return empty array", () => {
    const filterByName = filterBy("name");
    const results = filterByName("NonExistentName")(MOCK_DATA);
    expect(results).toEqual([]);
  });

  test("Filter by property that does not exist should return empty array", () => {
    const filterByNonExistentProperty = filterBy("nonExistentProperty");
    const results = filterByNonExistentProperty("SomeValue")(MOCK_DATA);
    expect(results).toEqual([]);
  });
});
