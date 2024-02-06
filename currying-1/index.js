export function filterBy(property) {
    // Write the code here
    return function (value) {

        return function (array) {

            return array.filter(function (item) {
                return item[property] === value;
            });

        };

    };

}
/*

// use cases
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
];
// filter name
const filterByName = filterBy("name");
const nameFilter = filterByName("NonExistentName")(MOCK_DATA);

console.log("filter by name \"NonExistentName\"", nameFilter)


// filter name
const filterByEmail = filterBy("email");
const emailFilter = filterByEmail("emily@example.com")(MOCK_DATA);

console.log("filter by name \"emily@example.com\"", emailFilter)

*/