
const AddTodo = ({ addTodo }) => {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input !== ""){
      addTodo({
        id: Date.now(),
        title: input,
        completed: false,
      });
      setInput("");
    }
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={input}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

