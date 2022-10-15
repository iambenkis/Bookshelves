import React from 'react';
import { AiOutlineMenuFold, AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone, BiSearchAlt2 } from 'react-icons/bi';
import Books from '../Books/Books';
import './Home.css';
import './media.css';

const Home = () => (
  <div className="container">
    <div className="header">
      <div className="left-side">
        <AiOutlineMenuFold className="menu" />
        <h3>My books</h3>
      </div>
      <div className="right-side">
        <BiMicrophone className="micro" />
        <AiOutlineSetting className="setting" />
      </div>
    </div>
    <div className="navlink" />
    <ul className="nav">
      <li>Home</li>
      <li>Books</li>
      <li>About</li>
    </ul>
    <img
      src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="bg"
      className="bg"
    />
    <div className="band">
      <p>BOOK WITH STARS AND PRICE</p>
      <div>
        <input type="text" placeholder="Search..." />
        <div className="div-search">
          <BiSearchAlt2 className="search" />
        </div>
      </div>
    </div>
    <div className="sort">
      <select>
        <option>Sort by</option>
        <option>name</option>
        <option>star</option>
        <option>price</option>
      </select>
    </div>
    <Books />
  </div>
);

export default Home;
