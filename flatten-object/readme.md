# [Flatten an Object | Frontend Hire](https://www.frontendhire.com/questions/flatten-object)

With at least a year of experience under your belt, you're expected not just to write functional code but also to ensure its reliability through comprehensive testing. 

Your task here is to write a function that flattens a given object, and equally important, to write test cases that thoroughly check the functionality of your code.

##### 

> Use case? Pretty common to have an object with nested structure and you want to flatten it! Sample inputs might give you better idea of the use case.

##### 

### What to do?

Given an object, print out the keys and values in-order.

### Edge Cases to Consider:

1. An empty object should return an empty string.

2. Consider other potential edge cases and include them in your tests.

```textile
    Input - 1: 
    {
    "firstName": "John",
    "lastName": "Doe",
    "age": "49"
    }
```

```textile
    Output - 1:
    firstName: John
    lastName: Doe
    age: 49
```

```textile
     Input - 2: 
    {
    "id": "123",
    "name": {
        "firstName": "John"
        "lastName": "Doe",
    }
    "age": "49"
    }
```

```textile
    Output - 2:
    id: 123
    name:
    firstName: John
    lastName: Doe
    age: 49
```