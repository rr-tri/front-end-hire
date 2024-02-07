# [Action Button With Modal | Frontend Hire](https://www.frontendhire.com/questions/action-button-with-modal)

##### 

> Modals are a staple in user interfaces, often triggered by user actions. 

##### 

In this challenge, you'll optimize the implementation of a modal in a React application. The current setup causes unnecessary re-renders of the SuperSlowComponent (verify this through console logs).

### Objective

Your task is to refactor the logic in App.js, transferring the relevant modal handling to a new component named ActionButtonWithModal. The modal component (Modal.js) is already implemented, so focus solely on the refactoring process.

### Key Points

- Refactor the existing modal logic in App.js into ActionButtonWithModal.The new component should handle modal interactions without impacting unrelated components.

- Ensure your solution optimizes performance, particularly avoiding unnecessary re-renders of SuperSlowComponent.

- The file ActionButtonWithModal.js is provided for your implementation.

### Must Read Resource For This question

- [x] [ A great article from Nadia Makarevich](https://www.developerway.com/posts/react-re-renders-guide)

- [x] [The SuperSlowComponent still renders twice?](https://react.dev/reference/react/StrictMode)

### External Dependencies Used

- [x] [react-modal](https://www.npmjs.com/package/react-modal) (A minimal configuration is already set up for your convenience.)
