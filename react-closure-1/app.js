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
  }, [message]);

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