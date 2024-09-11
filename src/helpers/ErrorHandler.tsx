import axios from "axios";
import {toast} from "react-toastify";

export const  handleError = (error: any) => {
    console.log(error);

    if(axios.isAxiosError(error)){
        let err = error.response;
        if(Array.isArray(err?.data.errors)){
            for(let e of err?.data.errors){
                //console.log(e);
                toast.warning(e.description);
            }
        }
        else if(typeof err?.data.error === 'object'){
             for(let key in err?.data.error){
                //console.log(err.data.error[key]);
                toast.warning(err?.data.error[key][0]);
            }
        }
        else if(typeof err?.data.error === 'string'){
            toast.warning(err.data.error);
        }
        else if(err?.data){
            toast.warning(err?.data);
        }else if(err?.status == 401){
            toast.warning("Login ?");
        }else if(err){
            toast.warning(err?.data);
        }

        // if(error.response){
        //     console.log(error.response.data);
        //     console.log(error.response.status);
        //     console.log(error.response.headers);
        // }else if(error.request){
        //     console.log(error.request);
        // }else{
        //     console.log('Error', error.message);
        // }
    }
}
 
