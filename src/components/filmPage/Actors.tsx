import React from 'react';
import {actorsAPI} from "../API";
import ActorsCarousel from "../modules/ActorsCarousel";
import {useParams} from "react-router-dom";

const Actors = () => {
    const {id} = useParams()
    const {data, error, isLoading} = actorsAPI.useFetchActorsQuery(parseInt(id as string));
    let newData;
    if (data?.length as number > 100) {
        newData = data?.slice(0, 99);
    } else {
        newData = data;
    }

    console.log(data)

    return (
        <div>
            <ActorsCarousel data={newData} carouselHeader={'Актёры'}/>
        </div>
    );
};

export default Actors;