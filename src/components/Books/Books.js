import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from "../../redux/bookReducer/reducer";

const Books = () => {
    const bookStore = useSelector((state) => state.books);
    const dispatch = useDispatch();

    // dispatch()
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);
    console.log(bookStore, "datas1");
    return (
        <div className="book-container">
            <h2>My books</h2>
        </div>
    )
}

export default Books;