
const useState = React.useState



function App() {
  // Update this to useState
  const [tasks,setTasks] = useState([{ id: 1, taskName: "First Task" }]);
  // console.log(tasks)

  const addTask = (task) => {
    // Write the logic
    if(tasks.length >= 1){
      setTasks((prevTasks)=>[...prevTasks,{id:tasks[tasks.length-1].id + 1,taskName:task}]);
    }else{
      setTasks((prevTasks)=>[...prevTasks,{id: 1,taskName:task}]);
    }
  };

  const deleteTask = (id) => {
    // Write the logic
   setTasks(tasks.filter((task) =>task.id !== id))
  };

  return (
    <div className="px-4 py-2">
      <AddTask onAdd={addTask} />
      {tasks.map((task, idx) => (
        <Task
          key={task.id}
          idx={idx}
          task={task}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
}

// No need to touch the below code!
function AddTask({ onAdd }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    onAdd(task);
    setTask("");
  };

  return (
    <div className="mb-4">
      <input
        placeholder="Add Task"
        className="border p-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleAddTask}
        className="bg-green-500 p-2 border border-green-500 text-white"
      >
        Add
      </button>
    </div>
  );
}

function Task({ task, idx, onDelete }) {
  return (
    <div className="flex items-center my-2">
      <p className="p-2 border border-blue-500">
        {idx + 1}: {task.taskName}
      </p>
      <button
        onClick={onDelete}
        className="bg-red-500 p-2 border border-red-500 text-white"
      >
        Delete
      </button>
    </div>
  );
}






const createRoot = ReactDOM.createRoot
const root = createRoot(document.getElementById("app"));
root.render(<App />);