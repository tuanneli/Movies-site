import React from 'react';
import loader from "../../assets/Rolling-1s-200px (1).svg";

const Loader = () => {
    return (
        <div
            style={{height: '90vh'}}
            className='w-100 d-flex justify-content-center align-items-center text-white fs-1'>
            <img style={{width: '3em'}} src={loader} alt=""/>
        </div>
    );
};

export default Loader;