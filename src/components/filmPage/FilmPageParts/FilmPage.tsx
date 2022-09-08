import React from 'react';
import FilmDescriptionPart from "../filmDescriptionPart";
import Similars from "../Similars";
import Actors from "../Actors";

const FilmPage = () => {
    return (
        <>
            <FilmDescriptionPart/>
            <Actors/>
            <Similars/>
        </>
    );
};

export default FilmPage;