import React, {useEffect} from 'react';
import {getSearchedMovies} from "../../redux/tops-page-reducer";
import {useAppDispatch, useAppSelector} from "../../redux/redux";
import Error from "../error/Error";
import Loader from "../modules/Loader";
import FilmCard from "./FilmCard";
import './films.css'

export const SearchedFilmsPage = () => {
    const state = useAppSelector(state => state.topsPageReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getSearchedMovies(state.currentPage, state.keyWord as string))
    }, [state.keyWord])

    return (
        <>
            <div className='all-films-box'>
                {(!state.isLoading && state.films.length === 0) ?
                    <Error error={'Ничего не найдено'} style={'white'}/> : null}
                {state.isLoading ? <Loader/> :
                    <div className='d-flex flex-row flex-wrap px-4'>
                        {state.films?.map(film => <FilmCard key={film.filmId} film={film}/>)}
                    </div>
                }
            </div>
        </>

    );

}


