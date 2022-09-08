import React, {useEffect} from 'react';
import {getSearchedMovies, getTopFilms} from "../../redux/tops-page-reducer";
import {useAppDispatch, useAppSelector} from "../../redux/redux";
import Error from "../error/Error";
import PagesCarousel from "../modules/PagesCarousel";
import Loader from "../modules/Loader";
import FilmCard from "./FilmCard";

export const FilmsPage = () => {
    const state = useAppSelector(state => state.topsPageReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (state.keyWord === '') {
            dispatch(getTopFilms(state.currentPage, state.topFilms))
        } else {
            dispatch(getSearchedMovies(state.currentPage, state.keyWord as string))
        }
    }, [state.currentPage, state.topFilms, state.keyWord])

    console.log(state.films)
    console.log(state.keyWord)

    return (
        <>
            <div style={{marginTop: '3em'}}>
                {(!state.isLoading && state.films.length === 0) ?
                    <Error error={'Ничего не найдено'} style={'white'}/> : null}
                {state.error !== '' ? <Error error={state.error}/> :
                    <PagesCarousel pagesCount={state.pagesCount} currentPage={state.currentPage}/>
                }
                {state.isLoading ? <Loader/> :
                    <div className='d-flex flex-row flex-wrap px-4'>
                        {state.films?.map(film => <FilmCard key={film.filmId} film={film}/>)}
                    </div>
                }
                {state.error === '' &&
                  <PagesCarousel pagesCount={state.pagesCount} currentPage={state.currentPage}/>
                }
            </div>
        </>

    );

}


