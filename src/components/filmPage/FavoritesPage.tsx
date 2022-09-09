import React from 'react';
import FilmCard from "../films/FilmCard";
import {useAppSelector} from "../../redux/redux";
import Error from "../error/Error"
import '../films/films.css'

const FavoritesPage = () => {

    const state = useAppSelector(state => state.favoritesReducer)
    console.log(state)

    return (
        <div className='all-films-box'>
            {state?.favorites?.length === 0 || state.favorites === null ?
                <Error error={'Ничего не выбрано :('} style={'white'}/> : null}
            <div className='d-flex flex-row flex-wrap px-4'>
                {state?.favorites?.map(film => <FilmCard key={film.filmId} film={film}/>)}
            </div>
        </div>
    );
};

export default FavoritesPage;