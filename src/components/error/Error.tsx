import React from 'react';

interface IError {
    error: string
}

const Error = ({error}: IError) => {
    return (
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
            <p style={{color: 'red', fontSize: '3.5em', padding: '5px', textAlign: 'center'}}>{error}</p>
        </div>
    );
};

export default Error;