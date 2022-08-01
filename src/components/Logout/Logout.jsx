import axios from "axios";
import React,{useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Cookies from 'universal-cookie';
axios.defaults.withCredentials = true
const Logout=()=>{
    const Navigate=useNavigate();
    const {state,dispatch}=useContext(UserContext);
    const deleteCookie = () => {
        axios.get('https://fymoo.herokuapp.com/deleteCookie',{ withCredentials: true }).then((res) =>{
            dispatch({type:"USER",payload:false});
             Navigate('/');
          console.log(res.data)
        })
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