import React from "react";
import {useState} from "react"

const BookEdit=()=>{

    const [title,setTitle]=useState("");

    const onHandleSubmit=(event)=>{
        event.preventDefault();
        onCreate(title)
        setTitle("")
    }

    const onChangeHandler=(event)=>{
        setTitle(event.target.value)
    }

    return(
        <form className={"form"}>
            <input className={"input"} value={title} type="text" placeholder={"Enter Book Title"} onChange={onChangeHandler}/>
            <button className={"btn"} type={"submit"} >Create Book</button>
        </form>
    )
}

export default BookEdit