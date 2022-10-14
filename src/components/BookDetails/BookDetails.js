import React , { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/bookReducer/reducer";
import { Link , useParams } from "react-router-dom";
import StarRating from "../StartRating/StartRating";
import { AiOutlineMenuFold, AiOutlineSetting  } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { ImSearch } from 'react-icons/im';
import { FaChevronLeft } from 'react-icons/fa'


const BookDetail = () => {
    const bookStore = useSelector((state) => state.books);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getBooks());
    })
    const books = bookStore.Books;
    const { id } = useParams();
    const book = books?.find((book) => book.id == id);
    let regex = /[+-]?\d+(\.\d+)?/g;
    const getStars = (star) => {
        const nbrStart = star.match(regex)[0];
        return Number(nbrStart);
     }
    return (
        <div>
            <div className="header">
                <div className='left-side'>
                    <Link to='/'>
                        <FaChevronLeft className="back"/>
                    </Link>
                    <h3>My books</h3>
                </div>
                <div className='right-side'>
                    <AiOutlineSetting />
                </div>
            </div>
            <img src={book.imgUrl}/>
            <h3>{book.title}</h3>
            <div className="item-details">
                <StarRating star={getStars(book.review)}/>
                <p>{book.price}</p>
            </div>
            <p>{book.description}</p>
            <span>Source : {book.source}</span>
        </div>
    )
}

export default BookDetail;