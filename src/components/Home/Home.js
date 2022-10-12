import React from 'react'
import { AiOutlineMenuFold, AiOutlineSetting  } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi'

const Home = () => {
    return (
        <div className='container'>
            <div className='header'>
                <AiOutlineMenuFold />
                <h3>My books</h3>
                <div className='aside-head'>
                    <BiMicrophone />
                    <AiOutlineSetting />
                </div>
            </div>
        </div>
    );
}

export default Home;