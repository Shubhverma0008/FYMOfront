import React from "react";
import './post.css'
import axios from "axios";
export default function Post({ name, height, location, currentstatus, img }) {
    
    const pf='https://fymoo.herokuapp.com/';
    var x;
   const imgcheck= async(x)=>{
    const user= await axios.get(x);
    console.log(user);
    if(user.status===308)
    {
        x='/assets/noAvatar.png';
    }

   }
    if(img)
    {
    x=pf+img;
     imgcheck(x);

    }

    else
    x='/assets/noAvatar.png';
    console.log(x);
    return (
        <>
            <div className="card card1">
                <div className="first_div">
                    <img class="card-img-top card-img-top1" src={x} alt="Card image cap" />
                    
                </div>

                <div className="second_div">
                 
                    <h5 class="card-title ">{name}</h5>
                    <p class="card-text">Height:{height}</p>
                    <p class="card-text">Location:{location}</p>
                    <p class="card-text">Status:{
                        currentstatus === 1 ? <p className="pending">Pending</p> : currentstatus === 2 ? <p className="received">Received</p> : <p className="processed">Processed</p>}</p>

                </div>
            </div>
        </>
    )
}