 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
import {UserProvider} from "./context/useAuth";
 
import {Link, Outlet} from "react-router-dom";
import AccountMenu from "./components/Menu";



function App(props: any) {
    const {state, dispatch} = props;

    console.log(state);



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
 