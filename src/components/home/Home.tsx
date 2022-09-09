import React from 'react';
import '../../App.css'

const Home = () => {

    // useEffect(() => {
    //     getSearchMovies(1, 'мстители')
    // }, [])

    return (
        <div className="icon d-flex justify-content-center align-items-center fs-1"
             style={{width: '100vw', height: '50vh'}}>
            Welcome home!
        </div>
    );
};

export default Home;