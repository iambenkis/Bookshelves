import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa';
import StarRating from '../StartRating/StartRating';
import { getBooks } from '../../redux/bookReducer/reducer';
import './Details.css';
import './media.css';

const BookDetail = () => {
  const bookStore = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  });
  const books = bookStore?.Books;
  const { id } = useParams();
  const book = books?.find((book) => Number(book.id) === Number(id));
  const regex = /[+-]?\d+(\.\d+)?/g;
  const getStars = (star) => {
    const nbrStart = star?.match(regex)[0];
    return Number(nbrStart);
  };
  return (
    <div className="singleBook">
      <div className="header">
        <div className="left-side">
          <Link to="/">
            <FaChevronLeft className="back" />
          </Link>
          <h3>Book details</h3>
        </div>
        <div className="right-side">
          <AiOutlineSetting className="setting" />
        </div>
      </div>
      <div className="detail">
        <img src={book?.imgUrl} alt="" />
        <div className="detail-description">
          <h3>{book?.title}</h3>
          <div className="item-details">
            <StarRating star={getStars(book?.review)} />
            <p>{book?.price}</p>
          </div>
          <p className="description">{book?.description}</p>
          <span>
            Source :
            {book?.source}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
