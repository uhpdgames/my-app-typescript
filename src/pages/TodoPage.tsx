import { useEffect, useState } from "react";
import Todo from "../views/Todo";

const TodoPage = () => {
    const [todos, setTodos] = useState<string[]>([]);


    
    useEffect(() => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            setTodos(JSON.parse(todos));
        }
    }, []);
    const handleTodo = () => {
        const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
        setTodos([...todos, name]);
        localStorage.setItem("todos", JSON.stringify([...todos, name]));
    }
    
    return (
        <div>
            <h1>To do Page</h1>
            <input type="text" name="name" />
            <button onClick={handleTodo}>Add</button>
            {
                todos.map((todo, index) => (
                    <Todo key={index} name={todo} />
                ))
            }

            {/*<Todo name="daily" />
            <Todo name="weekly" /> */}
        </div>
    );
}
       
export default TodoPage;