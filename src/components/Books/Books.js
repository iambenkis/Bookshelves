import React from "react";
import { useSelector} from 'react-redux';
import { FaChevronCircleRight } from 'react-icons/fa';
import './Books.css'
import StarRating from "../StartRating/StartRating";
import { Link } from "react-router-dom";

const Books = () => {
    const bookStore = useSelector((state) => state.books);
    const { Books } = bookStore;
    console.log(Books, "datas1");
    let regex = /[+-]?\d+(\.\d+)?/g;
    const getStars = (star) => {
        const nbrStart = star.match(regex)[0];
        return Number(nbrStart);
     }
    return (
        <div className="book-container">
            <div className="books">
                {
                    Books?.filter(b => b.id <16).map(book => (
                        <div className="book-item">
                            <img src={book.imgUrl} />
                            <div className="item-details">
                                <StarRating star={getStars(book.review)}/>
                                <p>{book.price}</p>
                                <Link className={({ isActive }) => `link ${(isActive ? 'active' : '')}`} to={`/detail/${book.id}`}>
                                    <FaChevronCircleRight
                                        size={15}
                                        className="chevron"
                                        onClick={() => console.log("Clicke", book.id)}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Books;