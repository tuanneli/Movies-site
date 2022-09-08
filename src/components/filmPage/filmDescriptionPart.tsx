import React from 'react';
import {filmAPI} from "../API";
import {useParams} from "react-router-dom";

const FilmDescriptionPart = () => {
    const {id} = useParams()
    const {data, error, isLoading} = filmAPI.useFetchFilmByIdQuery(parseInt(id as string))
    console.log(error)

    let genres: Array<string> = []
    let countries: Array<string> = []

    data?.genres.forEach(genre => {
        genres.push(genre.genre)
    })

    data?.countries.forEach(genre => {
        countries.push(genre.country)
    })

    const ageRate = {
        age0: '0+',
        age6: '6+',
        age12: '12+',
        age16: '16+',
        age18: '18+',
        age21: '21+',
    }

    const kinopoiskRatingColor = (data?.ratingKinopoisk as number >= 7.5) ? 'green' : data?.ratingKinopoisk as number <= 6.5 ? 'red' : 'orange'
    const imdbRatingColor = (data?.ratingImdb as number >= 7.5) ? 'green' : data?.ratingImdb as number <= 6.5 ? 'red' : 'orange'
    const criticsRatingColor = (data?.ratingFilmCritics as number >= 7.5) ? 'green' : data?.ratingFilmCritics as number <= 6.5 ? 'red' : 'orange'

    return (
        <>
            {/*{error && <Error error={error.message as string}/>}*/}
            <div className='pt-5 text-white fs-6 p-3'>
                <div className='main-box pt-4'>
                    <div className={'imageAndBehindBox'}>
                        <div className='pt-2'><img className='film-image position-absolute'
                                                   draggable={"false"}
                                                   style={{width: '20em', height: '30em'}}
                                                   src={data?.posterUrl} alt=""/>
                        </div>
                        <div className='behind-film-image-box position-absolute'
                             style={{width: '20em', height: '30em'}}/>
                    </div>
                    <div className='w-100 px-3 text-box'>
                        <h1 className='d-flex justify-content-center text-center pb-2'>{data?.nameRu} {data?.nameEn ? '/ ' + data?.nameEn : null} {data?.nameOriginal ? '/ ' + data?.nameOriginal : null} ({data?.year})</h1>
                        <div>
                            {data?.description && <p className='fs-6'>Описание: {data?.description}</p>}
                            <div className='genresAndRating'>
                                <div className='w-100'>
                                    <h6 className='d-flex flex-wrap'>
                                        Жарны: {genres.join(', ')}
                                    </h6>
                                    <h6 className='d-flex flex-wrap'>
                                        Страны: {countries.join(', ')}
                                    </h6>
                                    {!data?.serial && <p>Продолжительность: {data?.filmLength} мин.</p>}
                                    {data?.ratingAgeLimits && <p className='pb-0'>Возрастной
                                      рейтинг: {data !== undefined && ageRate[data?.ratingAgeLimits as keyof typeof ageRate]}</p>}
                                    {data?.slogan && <p>Слоган: {data?.slogan}</p>}
                                </div>
                                <div className='rating-box'>
                                    <div style={{width: '150px'}}>
                                        <div className='ps-4'>Рейтинг</div>
                                        <hr className='my-2'/>
                                        <div className='rating-item'>Kinopoisk:<p
                                            style={{color: kinopoiskRatingColor}}
                                            className='mb-0 rating-num'>&nbsp;{data?.ratingKinopoisk}</p>
                                        </div>
                                        <div className='rating-item'>Imdb: <p style={{color: imdbRatingColor}}
                                                                              className='mb-0 rating-num'>&nbsp;{data?.ratingImdb}</p>
                                        </div>
                                        <div className='rating-item'>Критики: <p style={{color: criticsRatingColor}}
                                                                                 className='mb-0 rating-num'>&nbsp;{data?.ratingFilmCritics}</p>
                                        </div>
                                        <div className='rating-item'>Ожидания: <p
                                            className='mb-0 rating-num'>&nbsp;{data?.ratingAwait}</p>
                                        </div>
                                    </div>
                                    <div style={{width: '80px'}}>
                                        <div>Голосов</div>
                                        <hr className='my-2'/>
                                        <p className='rating-item rating-num mb-2'>{data?.ratingKinopoiskVoteCount}</p>
                                        <p className='rating-item rating-num mb-2'>{data?.ratingImdbVoteCount}</p>
                                        <p className='rating-item rating-num mb-2'>{data?.ratingFilmCriticsVoteCount}</p>
                                        <p className='rating-item rating-num mb-2'>{data?.ratingAwaitCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilmDescriptionPart;