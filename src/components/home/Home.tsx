import React, {useEffect} from 'react';
import {getSearchMovies} from "../API";
import '../../App.css'
import {FaHeart, FaRegHeart} from 'react-icons/fa';

const Home = () => {

    useEffect(() => {
        getSearchMovies(1, 'мстители')
    }, [])

    return (
        <>
            <p className='text-white pt-5 d-flex justify-content-center align-items-center fs-1'
               style={{width: '97vw', height: '100vh'}}>
                Welcome home!
                <FaRegHeart className='heart heart-empty'/>
                <FaHeart className='heart heart-filled'/>
            </p>
        </>
    );
};

export default Home;