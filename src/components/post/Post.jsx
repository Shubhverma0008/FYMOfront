import React from "react";
import './post.css'
import axios from "axios";
export default function Post({id, name, height, location, currentstatus, img }) {
    
    const pf='https://fymoo.herokuapp.com/';
    var x;
    if(img)
    {
        console.log(id);
        if(id==="62e797d1e6466f1e88f764bd")
        x=img;
        else
         x=pf+img;
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