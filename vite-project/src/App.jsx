import useTasks from './hooks/useTasks';

function App() {
  const {newTask, setNewTask,tasks, createTask, editTask, deleteTask, toggleCompleteTask } = useTasks([])

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
              className={`bg-${task.completed ? 'yellow' : 'green'}-500  hover:bg-${task.completed ? 'yellow' : 'green'}-700 text-white font-bold py-1 px-2 rounded`}
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

export default App
