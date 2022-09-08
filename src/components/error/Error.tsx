import React from 'react';

interface IError {
    error: string
    style?: string
}

const Error = ({error, style}: IError) => {
    return (
        <div className='d-flex w-100 justify-content-center align-items-center'
             style={{height: '100vh'}}>
            <p style={{
                color: style !== undefined ? style : 'red',
                fontSize: '3.5em',
                padding: '5px',
                textAlign: 'center',
            }}>{error}</p>
        </div>
    );
};

export default Error;