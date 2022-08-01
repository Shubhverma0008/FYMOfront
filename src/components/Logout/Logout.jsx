import axios from "axios";
import React,{useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
axios.defaults.withCredentials = true
const Logout=()=>{
    const Navigate=useNavigate();
    const {state,dispatch}=useContext(UserContext);
    const calllogout=async()=>{
        try{
            const config = {
                headers: {
                    
                  'Content-Type': 'application/json',
                },
              };
            const data=await axios.get('https://fymoo.herokuapp.com/api/auth/deleteCookie',config);
            if(data.status===200){
                dispatch({type:"USER",payload:false});
                Navigate('/');
            }

        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        calllogout();

    },[]);
    return (
        <></>

    );

}
export default Logout