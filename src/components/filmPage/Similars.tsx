import React from 'react';
import {similarsAPI} from "../API";
import {FilmsCarousel} from "../modules/FilmCarousel";
import Loader from "../modules/Loader";
import {useParams} from "react-router-dom";


const Similars = () => {
    // const state = useAppSelector(state => state.filmPageReducer)
    const {id} = useParams()

    // const currenId = parseInt(id as string) | state.filmId
    // console.log(currenId)

    const {data, error, isLoading} = similarsAPI.useFetchSimilarsQuery(parseInt(id as string))

    return (
        <>
            {isLoading && <Loader/>}
            <div style={{marginTop: '3em'}}>
                {data?.items.length !== 0 && <FilmsCarousel data={data?.items} carouselHeader={"Похожие фильмы"}/>}
            </div>
        </>
    );
};

export default Similars;