# [useTasks | Frontend Hire](https://www.frontendhire.com/questions/use-tasks)

> Why don't programmers like nature? It has too many bugs!

### Objective

Implement task management functionality (**create**, **update**, **delete**, **complete**) in the **App** component, then abstract this logic into a custom **useTasks hook**. 

Use **Local Storage** to persist the task data between page reloads.

### Requirements

- <u>Initial Implementation in App Component</u>: Start by implementing the task management logic directly in the App component. 
  
  This includes creating, updating, deleting, and completing tasks, with the state being persisted in local storage.

- <u>Local Storage for Persistence</u>: Ensure that the task data persists between page reloads using local storage.

- <u>Task Management Features</u>
  
  - Create Task: Functionality to add a new task.
  
  - Update Task: Ability to modify an existing task.
  
  - Delete Task: Option to remove a task.
  
  - Complete Task: Feature to mark a task as completed.

- <u>Abstract to useTasks Hook</u>: After implementing the features in the App component, refactor the code by creating a custom useTasks hook (file has been created for you already!).
  
   This hook should encapsulate all the task management logic. The code should now be lot cleaner and easier to understand. 
  
  The **App** component should only be responsible for rendering the UI and calling the useTasks hook.

### Note

The current implementation uses TailwindCSS for styling, which is highly customizable and offers a wide range of classes for various styling needs.

Remember, the primary goal of this question is to understand the custom hook concept. The styling is secondary and can be tailored to fit your unique design aesthetics or the specific requirements of your project.

### Must Read Resources For This question

- [x] [ React Docs: Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
