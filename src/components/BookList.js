import React, {useContext} from "react";
import BookShow from "./BookShow";
import "./BookList.css"
import BooksContext from "../context/books";

const BookList=()=>{
    const {books}=useContext(BooksContext)
    return(
        <div className={"book-list"}>
            {books.length>0?
            books.map((item)=>{
                return(
                        <BookShow key={item.id} name={item.title} id={item.id} />
                )
            })
                :null}
        </div>
    )
}

export default BookList