import React, {useContext, useState} from "react";
import "./BookCreate.css"

import BooksContext from "../context/books";

const BookCreate=()=>{

    const {createBook:onCreate}=useContext(BooksContext)

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
        <div className={"form-container"} onSubmit={onHandleSubmit}>
            <h3 >Add A Book</h3>
            <form className={"form"}>
                <input className={"input"} value={title} type="text" placeholder={"Enter Book Title"} onChange={onChangeHandler}/>
                <button className={"btn"} type={"submit"} >Create Book</button>
            </form>
        </div>
    )
}

export default BookCreate