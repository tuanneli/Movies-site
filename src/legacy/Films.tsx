import React from 'react';

const Films = () => {
    return (
        <div>

        </div>
    );
};

export default Films;

// import {useEffect, useState} from "react";
// import {getMovies} from "../components/API";
// import {AxiosError} from "axios";
// import Navbar from "../components/navbar/Navbar";
// import PagesCarousel from "./PagesCarouselOld";
// import Loader from "../components/modules/Loader";
// import FilmCard from "../components/films/FilmCard";
// import {Styles} from "../type/Styles";
//
// const Films = () => {
//     const [films, setFilms] = useState<Styles[]>([])
//     const [pagesCount, setPagesCount] = useState<number>(1)
//     const [currentPage, setCurrentPage] = useState<number>(1)
//     const [isLoading, setIsLoading] = useState<boolean>(false)
//     const [error, setError] = useState<string>('')
//     const [topFilms, setTopFilms] = useState<string>('TOP_100_POPULAR_FILMS')
//
//
//     const getFilms = async (currentPage: number, topFilms: string) => {
//         try {
//             setIsLoading(true)
//             const result = await getMovies(currentPage, topFilms)
//             setFilms(result.films)
//             setPagesCount(result.pagesCount)
//             setIsLoading(false)
//         } catch (e: any) {
//             setIsLoading(false)
//             const Error: AxiosError = e;
//             setError(Error.message)
//         }
//     }
//
//     // console.log(films)
//     // console.log(pagesCount)
//
//     useEffect(() => {
//         getFilms(currentPage, topFilms)
//     }, [currentPage, topFilms])
//
//     return (
//         <>
//             {/*<Navbar setTopFilms={setTopFilms}/>*/}
//             <div style={{marginTop: '3em'}}>
//                 {/*{error !== '' ? <Error error={error}/> :*/}
//                 <PagesCarousel pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
//                 {/*}*/}
//                 {isLoading ? <Loader/> :
//                     <div className='d-flex flex-row flex-wrap px-4'>
//                         {films.map(film => <FilmCard key={film.filmId} film={film}/>)}
//                     </div>
//                 }
//                 {/*{error !== '' ? <Error error={error}/> :*/}
//                 <PagesCarousel pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
//                 {/*}*/}
//             </div>
//         </>
//
//     );
// };
//
// export default Films;