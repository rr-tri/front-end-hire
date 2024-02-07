import React from "react";

export  default function useTasks(initialData) {
    const [newTask, setNewTask] = React.useState("");

    const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('tasks')) || initialData);

    React.useEffect(() => {

        localStorage.setItem(
            'tasks',
            JSON.stringify(tasks)
        );
        
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

    }
    return { newTask, setNewTask,tasks, createTask, editTask, deleteTask, toggleCompleteTask }
}