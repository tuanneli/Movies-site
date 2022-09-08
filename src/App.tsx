import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css'
import {FilmsPage} from "./components/films/FilmsPage";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilmPage from "./components/filmPage/FilmPageParts/FilmPage";

function App() {

    return (
        <div className='App min-vh-100 min-vw-97 bg-black h-auto d-flex justify-content-center pb-2'>
            <div style={{maxWidth: '1600px', width: '100%'}}>
                <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/top'} element={<FilmsPage/>}/>
                    <Route path={'/film/:id'} element={<FilmPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
