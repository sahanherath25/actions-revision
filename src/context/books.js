import {createContext, useState} from "react";
import axios from "axios";

const BooksContext=createContext();

const Provider=({children})=>{

    const[books,setBook]=useState([]);

    const fetchBooks=async()=>{
        const results=await axios.get("http://localhost:3001/books")
        console.log("MOOVIES",results.data)
        setBook(results.data)
    }

    const createBook=async (title)=>{

        const response=await axios.post("http://localhost:3001/books",{title})
        const  updatedBooks=[...books,response.data]
        setBook(updatedBooks)

    }

    const editBookById=async (id,newTitle)=>{

        const response=await axios.put(`http://localhost:3001/books/${id}`,{title:newTitle})

        const updatedBooks=books.map((book)=>{
            if(id===book.id){
                return {...book,...response.data}
            }
            return book;
        })
        setBook(updatedBooks)
    }

    const deleteBookById=async (id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`)
        const newBooks=books.filter((book)=>{
            return book.id!==id
        })
        setBook(newBooks)
        fetchBooks()
    }

    const valuesToShare={
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }
    return(
        <BooksContext.Provider value={valuesToShare}>
            {children}
        </BooksContext.Provider>
    )
}
export {Provider}
export default BooksContext

