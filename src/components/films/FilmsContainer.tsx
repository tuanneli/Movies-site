import React, {useEffect} from 'react';
import Films from "./Films";
import {connect, useSelector} from "react-redux";
import {getTopFilms, ITopFilmsState} from "../../redux/topsPageReducer";
import {Dispatch} from "redux";
import films from "./Films";


const FilmsContainer = () => {

    const films = useSelector((state) => state.films)
    console.log(state)


    // useEffect(() => {
    //     getTopFilms()
    // }, [])

    return (
        <div>
            <Films/>
        </div>
    );
};

// const mapStateToProps = (state: ITopFilmsState) => {
//     return {
//         films: state.films,
//         currentPage: state.currentPage,
//         topFilms: state.topFilms,
//     }
// }

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         getTopFilms: (currentPage: number, topFilms: string) => {
//             dispatch(getTopFilms(currentPage, topFilms))
//         }
//     }
// }
