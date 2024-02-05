https://www.frontendhire.com/questions/react-closures-1


# React Closures - 1
    
    ```
    'Why do developers prefer dark mode? Because light attracts bugs, but in closures, they come regardless!'
    ```

### Objectives

    -- Identify the bug related to closure in the App component.
    -- Modify the component to ensure that the interval logs the updated message each time.
    -- On clicking the button, the message should be updated and the interval should log the updated message after 2 seconds.
    -- Ensure that the component maintains its performance and does not cause unnecessary re-renders.
    ```App.js
    import React from "react";

    export default function App() {
    const [message, setMessage] = React.useState("Initial message");
    const [count, setCount] = React.useState(0);
    const [loggedMessage, setLoggedMessage] = React.useState("");
    React.useEffect(() => {
    const intervalId = setInterval(() => {
      setLoggedMessage(message);
    }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const updateMessage = () => {
        setMessage("Updated message " + count);
        setCount(count + 1);
    };

    return (
        <div>
        <p>Current Message: {message}</p>
        <p>Last Logged Message (Updated Every Two Seconds): {loggedMessage}</p>
        <button onClick={updateMessage}>Update Message</button>
        </div>
    );
    }


    ```