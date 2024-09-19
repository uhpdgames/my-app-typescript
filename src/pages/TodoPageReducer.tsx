import {useReducer } from "react";
import Todo from "../views/Todo";

//init state
const initState = {
    name: '',
    todos: []
}
//action
const setTodo = (payload:string)  => {
    return {
        type: "SET_TODO",
        payload
    }
}

const addTodo = (payload: string) => {
    return {
        type: "ADD_TODO",
        payload
    };
}  
const deleteTodo = () =>{ 
    return {
        type: "DEL_TODO",
        
    };
}
//reducer
const reducer = (state: any, action: any) => {
   console.log('Action' , action);
   console.log('Prev state' , state);

   switch(action.type){
    case "SET_TODO":
        return {
            ...state,name:action.payload
        }
    case "ADD_TODO":
        return {
            ...state,todos:[...state.todos,action.payload]
        }
   }
}   

const TodoPageReducer = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const {name, todos} = state;

    const handleSubmit = () => {  
         dispatch(addTodo(name))
    }
    
    return (
        <div>
            <h1>To do Page</h1>
            <input
                type="text"
                name="name"
                value={name}
                onChange={e=>{
                    dispatch(setTodo(e.target.value));
                }}
            />
            <button onClick={handleSubmit}>Add</button> 

            {
                todos.map((todo: string, index: null | undefined) => (
                    <Todo key={index} name={todo} />
                ))
            }

            
        </div>
    );
}
       
export default TodoPageReducer;