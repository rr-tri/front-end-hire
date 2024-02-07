# [Curry What? | Frontend Hire](https://www.frontendhire.com/questions/currying-1)

##### 

> "Why did the JavaScript developer refuse to use currying in their code? Because every time they tried, they ended up with a "function stew" that nobody could digest! 🥘😄"

##### 

You are given a series of test cases in /index.test.js that your **filterBy** function needs to pass. These tests involve filtering an array of mock data (MOCK_DATA) based on different properties such as name and email.

### Objectives

 Implement the filterBy function in the /index.js file. This function should:

- Accept a property name (e.g., name or email) and return another function.

- The returned function should accept a property value (e.g., "Michael") and return yet another function.

- This final function should accept an array of objects (like MOCK_DATA) and return a filtered array based on the provided property name and value.

### Resources

- [x] [Currying Partials from javascript.info](https://javascript.info/currying-partials)
