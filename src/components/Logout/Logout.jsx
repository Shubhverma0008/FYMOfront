import axios from "axios";
import React,{useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Cookies from 'universal-cookie';
const cookie=new Cookies();
axios.defaults.withCredentials = true
const Logout=()=>{
    const Navigate=useNavigate();
    const {state,dispatch}=useContext(UserContext);
    const deleteCookie = () => {
        cookie.remove('jwtusersdetails');//jwtusersdetails
            dispatch({type:"USER",payload:false});
             Navigate('/');
         
      }
    const calllogout=async()=>{
        try{
            deleteCookie();
             

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