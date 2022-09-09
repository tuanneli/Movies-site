import React from 'react';
import './CustomHeart.css'
import {useAppDispatch, useAppSelector} from "../../redux/redux";
import {favoritesSlice} from "../../redux/favorites-reducer";
import {Styles} from "../../type/Styles";

interface ICustomHeart {
    currentFilm: Styles
    // favoritesId: number[]
    // setFavoritesId: Dispatch<number[]>
}

const CustomHeart = ({currentFilm}: ICustomHeart) => {

    const dispatch = useAppDispatch()
    const favoritesId = useAppSelector(state => state.favoritesReducer.favoritesId)

    const handleClick = (e: any) => {
        e.stopPropagation()
        if (favoritesId?.includes(currentFilm.filmId)) {
            dispatch(favoritesSlice.actions.removerFromFavorites(currentFilm.filmId))
        } else {
            dispatch(favoritesSlice.actions.setFavorites(currentFilm))
        }
    }

    let fillColor = ''
    if (favoritesId?.includes(currentFilm.filmId)) {
        fillColor = 'red';
    } else {
        fillColor = ''
    }

    return (
        <div className="icon" onClick={handleClick}>
            <svg className="heart-main"
                 style={{fill: fillColor, stroke: fillColor}}
                 viewBox="0 0 512 512">
                <path
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
            </svg>
            <svg className="heart-background"
                 style={{fill: fillColor, stroke: fillColor}}
                 viewBox="0 0 512 512">
                <path
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
            </svg>
        </div>
    );
};

export default CustomHeart;