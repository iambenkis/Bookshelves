import React , { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/bookReducer/reducer";
import { Link , useParams } from "react-router-dom";


const BookDetail = () => {
    const bookStore = useSelector((state) => state.books);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getBooks());
    })
    const books = bookStore.Books;
    const { id } = useParams();
    const book = books?.find((book) => book.id == id);
    return (
        <div>
            <img src={book.imgUrl}/>
            <p>{book.description}</p>
        </div>
    )
}

export default BookDetail;