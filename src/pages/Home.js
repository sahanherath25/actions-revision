import React, {useContext, useEffect} from "react";
import BookList from "../components/BookList";
import BookCreate from "../components/BookCreate";
// import myBooks from "../../db.json"
import BooksContext from "../context/books";



const Home=()=>{

    useEffect(()=>{
        fetchBooks()
    },[])
    const {fetchBooks}=useContext(BooksContext)

    return(
        <div>
            <h1>Home Page</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}

export default Home