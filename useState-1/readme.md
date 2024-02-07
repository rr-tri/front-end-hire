# [useState - 1 | Frontend Hire](https://www.frontendhire.com/questions/use-state-1)

This question revolves around the most frequently used hook in React development.

> "Why did the useState hook feel so important? Because every time something changed, it was called upon!"   

### Objective

Your task is to implement the logic for managing tasks –

 including storing, adding, and deleting them within a local state variable.

Focus on functionality, and don't worry about styling, although you're welcome to add some if you wish. TailwindCSS is already set up for your convenience.

### Requirements

- <u>Storing Tasks</u>: Implement a state variable to hold the list of tasks.

- <u>Adding Tasks</u>: Write the logic to add new tasks to the state.

- <u>Deleting Tasks</u>: Write the logic to remove tasks based on their id.

### Working with Task IDs

In this question, each task will need a unique identifier (ID). For simplicity, you can use **Math.random()** to generate a pseudo-random ID for new tasks. 

Here's a quick way to do it:

```js
const newTaskId = Math.random().toString(36).substr(2, 9);
```

This will create a string that's reasonably unique for our purposes. However, keep in mind that in real-world applications, more robust methods are recommended for generating unique IDs (see resources).

### Bonus Task

- [x] Implement a **clear all** tasks feature.

### Must Read Resources For This question

- [x] [ State: A Components Memory ](https://react.dev/learn/state-a-components-memory)- A guide to understanding state in React.

- [x] [ API Reference: useState ](https://react.dev/reference/react/useState)- Official documentation for the useState hook.

- [x] [Rendering Lists – React](https://react.dev/learn/rendering-lists#where-to-get-your-key) - A guide to understanding keys.

- [x] [How to create an unique id in ReactJS ? ](https://www.geeksforgeeks.org/how-to-create-an-unique-id-in-reactjs/) - An article on GeeksForGeeks.
