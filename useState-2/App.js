
const useState = React.useState
const useEffect = React.useEffect
const useMemo = React.useMemo
//---------------------------------------------------------------------------------------
//=======================================================================================

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log("items", items);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <AddTask value={inputValue} onValueChange={setInputValue} onAddItem={addItem} />
      <Tasks items={items} onItemChange={setItems} />
    </div>
  );
}
//--------------------------------------------------------------------------------------------
const AddTask = ({ value, onValueChange, onAddItem }) => {

  return (
    <div className="flex gap-2">
      <input
        className="border p-1"
        placeholder="Item"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <button className="bg-blue-600 p-2 text-white" onClick={() => onAddItem()}>
        Add Item
      </button>
    </div>
  );
}
//---------------------------------------------------------------------------------------------
const Tasks = ({ items, onItemChange }) => {

  const deleteItem = (index) => {
    const r = [...items]
    r.splice(index, 1)
    onItemChange(r);
  };

  return (
    <ul>
      {items.map((task, index) => (
        <li className="flex items-center gap-6 m-3" key={index}>
          {task}
          <button
            className="bg-red-600 p-2 text-white"
            onClick={() => deleteItem(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
//=============================================================================================

// -----------------------------------------------------------
// =============================================================
const createRoot = ReactDOM.createRoot
const root = createRoot(document.getElementById("app"));
root.render(<App />);
// =============================================================
// -------------------------------------------------------------