

const App = () => {
  const [inputValue, setInputValue] = React.useState('');
  const { state: todos, setState: setTodos, undo, redo, clearHistory } = useHistory([]);
    console.log(todos)
  const addTodo = () => {
    if (inputValue.trim()) {
      // Ideally add you todos to state here.
      setTodos([...todos,  inputValue ]);
      setInputValue('');
    }
  };
  const handleInputChange=(e) => setInputValue(e.target.value)

  return (
    <div className="flex flex-col p-4 border max-w-min">
      <h2 className="text-center text-xl font-bold my-3">Todo Application</h2>
      <div className="flex justify-between">
        <button className="rounded border-black border bg-slate-300 px-2" onClick={undo}>Undo</button>
        <button className="rounded border-black border bg-slate-300 px-2" onClick={redo}>Redo</button>
      </div>
      <input
      className="border border-black my-3 p-2 rounded"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a todo"
      />
      <button className="rounded border-black border bg-slate-300 px-2" onClick={addTodo}>Add Todo</button>
      <button className="rounded border-black border bg-slate-300 px-2" onClick={clearHistory}>Clear History</button>

      <ul className="flex flex-col border my-5 p-5">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
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
