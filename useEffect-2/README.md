# [useEffect - 2 | Frontend Hire](https://www.frontendhire.com/questions/use-effect-2)

> What happens when a React component forgets to clean up after itself? It leaves behind a trail of events!

### Objectives

- Identify and resolve the bug caused by the missing cleanup function in the WindowWidthDisplay component's useEffect hook.

- Implement a cleanup function to properly remove the event listener when the WindowWidthDisplay component unmounts.

- It is difficult to notice the bug in this example (console logs might help), but it is important to understand the consequences of not cleaning up after a component.

- Understand the importance of cleaning up in React, especially when the component is part of a larger application.

### Resources

- [x] [React Docs: useEffect Hook](https://react.dev/reference/react/useEffect)

- [x] [MDN Web Docs: Window resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event)
