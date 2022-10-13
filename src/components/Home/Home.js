import React from 'react'
import { AiOutlineMenuFold, AiOutlineSetting  } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import Books from '../Books/Books';


const Home = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='left-side'>
                    <AiOutlineMenuFold />
                    <h3>My books</h3>
                </div>
                <div className='right-side'>
                    <BiMicrophone />
                    <AiOutlineSetting />
                </div>
            </div>
            <img
            src='https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            style={
                {width: '100%'}
            }/>
            <div className='band'>
                BOOK WITH STARS AND PRICE
            </div>
            <Books />
        </div>
    );
}

export default Home;