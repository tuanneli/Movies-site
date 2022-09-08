import React from 'react';
import {Styles} from "../../type/Styles";
import './films.css';
import {useAppDispatch} from "../../redux/redux";
import {filmSlice} from "../../redux/film-page-reducer";
import {Link} from "react-router-dom";

interface IFilmCard {
    film: Styles
}

const FilmCard = ({film}: IFilmCard) => {

    const ratingColor = (parseFloat(film.rating) >= 7.5) ? 'green' : parseFloat(film.rating) <= 6.5 ? 'red' : 'orange'
    const dispatch = useAppDispatch()

    const onImageClickHandler = () => {
        dispatch(filmSlice.actions.setFilmId(film?.filmId))
        window.localStorage.setItem('currentFilmId', JSON.stringify(film?.filmId))
    }

    return (
        <div className="p-2 mr-3 card-box">
            <div className='card' style={{height: '100%'}}>
                <Link to={`/film/${film?.filmId}`}>
                    <img src={film?.posterUrl}
                         draggable={'false'}
                         onClick={onImageClickHandler}
                         className="card-img-top position-absolute"
                         alt={film?.nameRu}/>
                </Link>
                <div className="card-body pb-0">
                    <div className='film-name'>
                        <h5 className="card-title text-center px-1">{film?.nameRu} ({film?.year})</h5>
                        {film?.nameEn !== null &&
                          <h5 className="card-title text-center px-1">{film?.nameEn} ({film?.year})</h5>}
                    </div>
                    <hr/>
                    <div className="film-description">
                        <div className='rating'>
                            <h6 className='d-flex justify-content-between' style={{fontSize: '22px'}}>
                                <b>Рейтинг:</b>
                                <p style={{
                                    color: ratingColor,
                                    marginBottom: '0',
                                    marginRight: '1em'
                                }}>&nbsp;{film?.rating}</p></h6>
                        </div>
                        <hr/>
                        <div className='votes'>
                            <h6 className='d-flex'><b>Голосов:</b> <p className='mb-0'>&nbsp;{film?.ratingVoteCount}</p>
                            </h6>
                        </div>
                        <div className='countries'>
                            <h6 className='d-flex flex-wrap'>
                                <b>Страны: </b> {film?.countries?.map(country =>
                                <p style={{margin: '0'}} key={country.country}>&nbsp;{country.country}</p>)}</h6>
                        </div>
                        <div className='genres'>
                            <h6 className='d-flex flex-wrap'>
                                <b>Жарны:</b>
                                {film?.genres?.map(genre =>
                                    <p key={genre.genre} className='mb-1'>&nbsp;{genre.genre}</p>)}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmCard;