const App = () => {
    const [todos, setTodos] = React.useState([]);  
    console.log(todos);
    const addTodo =(todo)=>{
        setTodos((prev)=>[...prev,todo])
    }
    const toggleTodoCompletion =(id)=>{
        const toUpdate = [...todos];
        toUpdate.map((todo)=>{
            if(todo.id===id){
                todo.completed=!todo.completed
            }else{
                return todo
            }
        })
        setTodos(toUpdate);
    }
    return(
    <>
    <AddTodo addTodo={addTodo} />
    <TodoList todos={todos} toggleTodoCompletion={toggleTodoCompletion} />
    </>
    )}


// -----------------------------------------------------------
// =============================================================
const createRoot = ReactDOM.createRoot
const root = createRoot(document.getElementById("app"));
root.render(<App />);
// =============================================================
// -------------------------------------------------------------