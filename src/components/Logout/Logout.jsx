import axios from "axios";
import React,{useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
const Logout=()=>{
    const Navigate=useNavigate();
    const {state,dispatch}=useContext(UserContext);
    const calllogout=async()=>{
        try{
        const data= await axios.get('https://fymo.herokuapp.com/api/auth/logout');
        dispatch({type:"USER",payload:false});
        Navigate('/');

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