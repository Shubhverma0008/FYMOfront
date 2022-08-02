import React, { useContext, useEffect,useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import './status.css'
import Post from "../post/Post";

const Status=()=>{
 const {state,dispatch}= useContext(UserContext);
 const [data,setData]=useState([]);
  const Navigate=useNavigate();
  var user;
  const callstatuspage= async()=>{
    try{
       user= await axios.get('https://fymoo.herokuapp.com/api/auth/getdata');
      dispatch({type:"USER",payload:true})
      // console.log(user);
      const list=await axios.get(`https://fymoo.herokuapp.com/api/auth/getmissingpersonlist/${user.data._id}`);
      setData(list.data);  
    }catch(err){
      console.log(err);
      Navigate('/login')
    }
  }
  useEffect(()=>{
     callstatuspage();
  },[]) 
    return (
        <>
        <div className="row row1">
    { user.data.phone==9616543935  ?<> <Post key="62e797d1e6466f1e88f764bd" name="Shubh" height="169" location="MMB" currentstatus="3" img="/assets/shubhPic.jpg"/>
        <Post key="62e797d1e6466f1e88f764bd" name="John" height="179" location="USA" currentstatus="2" img="/assets/man1.jpg"/>
        <Post key="62e797d1e6466f1e88f764bd" name="Jolly" height="165" location="LONDON" currentstatus="1" img="/assets/girl.jpg"/>
        <Post key="62e797d1e6466f1e88f764bd" name="Kaby" height="179" location="New York" currentstatus="1" img="/assets/man2.jpg"/>
        <Post key="62e797d1e6466f1e88f764bd" name="Raju" height="169" location="LKO" currentstatus="1" img="/assets/man3.jpg"/>
        <Post key="62e797d1e6466f1e88f764bd" name="Karan" height="167" location="Mumbai" currentstatus="1" img="/assets/man4.jpg"/></>:<></>}
        

        {data.map((p) => (
          <Post key={p._id} name={p.name} height={p.height} location={p.missingLocation} currentstatus={p.currentStatus} img={p.img} />     
        ))}
          </div> 
        </>
    );
}
export default Status