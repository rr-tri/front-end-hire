
const useEffect = React.useEffect
const useState = React.useState




 function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return ()=> clearInterval(interval)
  }, [seconds]);
 
  return (
    <div className="text-center p-4">
      <p>Timer: {seconds} Seconds</p>
      <button
        className="bg-red-500 p-2 rounded hover:bg-red-600"
        onClick={() => setSeconds(0)}
      >
        Reset Timer
      </button>
    </div>
  );
}






const createRoot = ReactDOM.createRoot
const root = createRoot(document.getElementById("app"));
root.render(<App />);