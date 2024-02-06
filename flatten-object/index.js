export function flattenObject(inputObject) {
    if (Object.keys(inputObject).length === 0) return "";
    let result = "";
    for (const [key, value] of Object.entries(inputObject)) {
      if (typeof value !== "object" && value !== null) {
        result = result + "\n" + `${key}: ${value}`;
      } else {
        result = result + "\n" + `${key}:`;
        result = result + flattenObject(value);
      }
    }
    return result;
  }
  console.log(
    flattenObject({
      id: "123",
      name: {
        firstName: "John",
        lastName: "Doe",
      },
      age: "49",
    }),
  );
  