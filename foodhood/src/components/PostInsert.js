import React from 'react'
import "../css/PostInsert.css";
import axios from 'axios';
import {useState} from "react";

function PostInsert() {

    const[picture,setPicture]=useState("")
    const[caption,setCaption]=useState("")
    const onsubmit=(event)=>{
        axios.post('http://localhost:8080/', {
            picture:event.target[0].value,
            caption:event.target[1].value
          })
            .then((response) => {
                alert("added");
              console.log(response);
             
            })
            .catch((error) => {
              console.log(error);
            });
            console.log({picture:picture,caption:caption})
        
    } 

  return (

    <div className='PostInsertBase'>PostInsert
        <div className='postForm'>
           <form className='postinsertform'  onSubmit={onsubmit}> 
            <input className='postinsertimage' placeholder="image" onChange={(event)=>{setPicture(event.target.value)}}/>
            <input className='postinsertcaption'placeholder="caption"onChange={(event)=>{setCaption(event.target.value)}}/>
            <button className='postinsertcreatebutton' type="submit">add</button>
            
            

            </form>
        </div>
    </div>
  )
}

export default PostInsert