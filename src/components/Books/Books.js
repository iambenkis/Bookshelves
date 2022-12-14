import React from 'react';
import { useSelector } from 'react-redux';
import { FaChevronCircleRight } from 'react-icons/fa';
import './Books.css';
import './media.css';
import { Link } from 'react-router-dom';
import StarRating from '../StartRating/StartRating';

const Books = ({ searchItem }) => {
  const bookStore = useSelector((state) => state.books);
  const { Books } = bookStore;
  const regex = /[+-]?\d+(\.\d+)?/g;
  const getStars = (star) => {
    const nbrStart = star.match(regex)[0];
    return Number(nbrStart);
  };
  return (
    <div className="book-container">
      <div className="books">
        {
          Books?.filter((b) => (b.id < 16)).filter((b) => {
            if (searchItem === '') {
              return b;
            }
            if (b.title.toLowerCase().includes(searchItem.toLowerCase())) {
              return b;
            }
          }).map((book, i) => (
            <div className="book-item" key={book.id}>
              <img src={book.imgUrl} alt="img" />
              <div className="item-details">
                <StarRating star={getStars(book.review)} id={i} />
                <p>{book.price}</p>
                <Link className={({ isActive }) => `link ${(isActive ? 'active' : '')}`} to={`/detail/${book.id}`}>
                  <FaChevronCircleRight
                    size={15}
                    className="chevron"
                  />
                </Link>
              </div>
            </div>
          ))
}
      </div>
    </div>
  );
};

export default Books;
