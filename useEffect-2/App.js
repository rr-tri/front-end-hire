
const useState = React.useState


const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle WindowWidthDisplay
      </button>
      {showComponent && <WindowWidthDisplay />}
    </div>
  );
};






// -----------------------------------------------------------
// =============================================================
const createRoot = ReactDOM.createRoot
const root = createRoot(document.getElementById("app"));
root.render(<App />);
// =============================================================
// -------------------------------------------------------------