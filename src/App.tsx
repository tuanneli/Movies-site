import React from 'react';
import {Route, Routes} from "react-router-dom";
import Films from "./components/films/Films";
import './App.css'

function App() {


    return (
        <div className='App min-vh-100 min-vw-97 bg-black h-auto d-flex justify-content-center pb-2'>
            <div style={{maxWidth: '1600px', width: '100%'}}>
                <Routes>
                    {/*<Route path={'/'} element={<Home/>}/>*/}
                    <Route path={'/'} element={<Films/>}/>
                </Routes>

            </div>
        </div>
    )
}

export default App;
