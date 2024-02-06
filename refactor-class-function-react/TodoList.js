

const TodoList = ({ todos, toggleTodoCompletion }) => {
    return (
      <ul>
        {todos?.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodoCompletion(todo.id)}
          >
            {todo.title} {todo.completed ? "(completed)" : ""}
          </li>
        ))}
      </ul>
    );
  };


