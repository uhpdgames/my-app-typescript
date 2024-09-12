 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
import {UserProvider} from "./context/useAuth";
 
import {Link, Outlet} from "react-router-dom";
import AccountMenu from "./components/Menu";
import React    from "react";

import todo from "./api/todo";

function App(props: any) {
   // const {state, dispatch} = props;

   // console.log(state);

    const [todos, setTodos] = React.useState([]);
    const [from, to] = [0, 10];

    React.useEffect(()=>{
        todo(from, to).then((data:any)=>{
            setTodos(data);
        })
    }, [todos])


  return (
    <>
      <UserProvider>
        <AccountMenu/>

        <Outlet/>
        <ToastContainer/>
      </UserProvider>
    </>
  );
}

export default App;
 