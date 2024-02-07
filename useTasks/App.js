
function App() {
  const [tasks, setTasks] = React.useState( 
    JSON.parse(
      decryptData(
        localStorage.getItem("tasks")
      )
    ) 
    || []
    
    );
  const [newTask, setNewTask] = React.useState("");


  React.useEffect(() => {
    localStorage.setItem('tasks', encryptData(JSON.stringify(tasks)));
  }, [tasks]);

  const createTask = () => {
    // Create a new task with a unique id and add it to the tasks state
    setTasks((prev) => [...prev, { id: Date.now(), text: newTask, completed: false }])
  };

  const editTask = (taskId, newText) => {
    // Update the text of a task
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, text: newText } : task
      ));
  };

  const deleteTask = (taskId) => {
    // Delete a task from the tasks state
    setTasks(prev =>
      prev.filter(task =>
        task.id !== taskId
      ));

  };

  const toggleCompleteTask = (taskId) => {
    // Toggle the completed status of a task
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, completed: (task.completed) ? false : true } : task
      )
    )

  };
 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <div className="mb-4">
        <input
          type="text"
          className="border p-2 rounded mr-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>{createTask(newTask);setNewTask("")}}
        >
          Add Task
        </button>
      </div>

      <div>
        {tasks.map(task => (
          <div key={task.id} className="flex items-center mb-2">
            <input
              type="text"
              className={`flex-1 p-2 mr-2 ${task.completed ? 'line-through' : ''}`}
              value={task.text}
              onChange={(e) => editTask(task.id, e.target.value)}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
            <button
              className={`bg-${task.completed ? 'yellow' : 'green'}-500 hover:bg-${task.completed ? 'yellow' : 'green'}-700 text-white font-bold py-1 px-2 rounded`}
              onClick={() => toggleCompleteTask(task.id)}
            >
              {task.completed ? 'Not Complete' : 'Complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
// -----------------------------------------------------------
// =============================================================
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
// =============================================================
// -------------------------------------------------------------