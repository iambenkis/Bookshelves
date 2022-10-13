import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from "../../redux/bookReducer/reducer";
import { AiOutlineStar } from 'react-icons/ai';
import { FaChevronCircleRight } from 'react-icons/fa';
import './Books.css'
import StarRating from "../StartRating/StartRating";

const Books = () => {
    const bookStore = useSelector((state) => state.books);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);
    const { Books } = bookStore;
    console.log(Books, "datas1");
    let regex = /[+-]?\d+(\.\d+)?/g;
    const maxStars = 5;
    const getStars = (star) => {
        const nbrStart = star.match(regex)[0];
        // const startPercentage = (nbrStart/maxStars) * 100;
        // const startPercentageRounded = `${Math.round(startPercentage /10) * 10}%`
        return Number(nbrStart);
     }
    return (
        <div className="book-container">
            <h2>My books</h2>
            <div className="books">
                {
                    Books?.filter(b => b.id <16).map(book => (
                        <div className="book-item">
                            <img src={book.imgUrl} />
                            <div className="item-details">
                                <StarRating star={getStars(book.review)}/>
                                <p>{book.price}</p>
                                <FaChevronCircleRight
                                    color="blue"
                                    size={15}
                                    className="chevron"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Books;