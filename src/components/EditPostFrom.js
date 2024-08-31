import React from "react";
import {useState} from "react";
import {useContext} from "react";
import BooksContext from "../context/books";

const EditPostFrom=({onSubmit,id})=>{

    const [title,setTitle]=useState("");

    const {editBookById}=useContext(BooksContext)

    const onHandleSubmit=(event)=>{
        event.preventDefault();
        // onCreate(title)
        console.log("Book title is ",title)
        editBookById(id,title)
        onSubmit()
        setTitle("")
    }

    const onChangeHandler=(event)=>{
        setTitle(event.target.value)
    }

    return(
            <form className={"form edit-form"} style={{width:"100%"}} onSubmit={onHandleSubmit}>
                <input className={"input"} value={title} type="text" placeholder={"Enter Book Title"} onChange={onChangeHandler}/>
                <button  className={"btn"} type={"submit"} >Save</button>
            </form>

    )

}

export default EditPostFrom