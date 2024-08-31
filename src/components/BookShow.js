import React, {useContext, useState} from "react";
import { IoClose } from "react-icons/io5";
import {FiEdit} from "react-icons/fi";
import EditPostFrom from "./EditPostFrom";
import BooksContext from "../context/books";


const BookShow = ({name,id}) => {

    const [editPost,setEditPost]=useState(false);

    const {deleteBookById}=useContext(BooksContext)

    const handleSubmit=()=>{
        setEditPost(false)
    }

    return (
        <div className={"book-item"}>

            <div className="image-container">
                <div className="icons">
                    <FiEdit className={"edit-icon"}  size={25} onClick={()=>setEditPost(!editPost)}/>
                    <IoClose className={"close-icon"} size={28} onClick={()=>deleteBookById(id)} />
                </div>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACUCAMAAAD79nauAAAAMFBMVEX19fXMzMzJycna2try8vLS0tLg4ODV1dX4+PjPz8/t7e3m5ubj4+Pq6urd3d3GxsZojzlcAAACTklEQVR4nO3ajXKjIBSGYRCQg6De/90uaKKIplWSHU92v2emM520meEt4ZifCgEAAAAAAAAAAAAAAAAAAAAAAPD/0N6aSrbXd69+1pmxqWc03R0QadvINzSKwV5QmNdSZbprYLAVaSPc0FZRLkaouwsim9ZR+cekId7Zivu3wkonh+oI55wSdHvFB3bifpsI3fXdhWnDMUK31jhj29MZ/CJIW5mGZiNPj35+EWK56jX2ZAW7CPLjehn25046v4g4Ld2z4nBh+zB2ESJeuJcIeTT7Q1fexi5Cb57X6f3fPTSmrGAXIfIns25/skM68EUFuwgy2fPr/cLCNH6LveAXkU+nvnzchGX45j/hF0F2faFT/A6F5RJiuvx2fhFieKy0vGLHhuXAbE43wwgSXqUX/74cryE/841cK/hFiPTVdfvhGjbDN39EsYw4VDSkiue5/5YI2jVkk5ZzRP7tUUNc+FzBOaJfH/ThxZtS87lgHOHlcnRfNThp0hhmG0HeLQMouz4UEa5xxDeC/Hp0j8/DYytGwTaC+nUA/dAQNYJrxGMfEju8XP8jgnhGLPswL/M7I/yPy/6OCO9+Wzn3iGm2fntEPNOXPjJiGSGuFDCNIH3xoztEfBoi2EWMvy17a2QYIbSxlxiOEUJfJDg+i634BJVdRA1eEVcfSk+KRwSpNFqtqjK9BV27jZ+MmF4H1f63U7rvyQ8p/y711v87yeHu9ScUK6qNUk1vpzOg27ojoVSb3p/iEEHvEJpHBAAAAAAAAAAAAAAAAAAAAADAP+4PU5UgZIsZWLcAAAAASUVORK5CYII="
                    alt=""/>
            </div>
            {
                editPost?<EditPostFrom id={id}  onSubmit={handleSubmit}/>: <button className={"btn"}>Edit Book</button>
            }

            <p>{name}</p>

        </div>
    )
}

export default BookShow