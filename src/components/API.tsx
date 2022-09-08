import axios from "axios";
import {IActors, IFilm, IGetMovies, IGetSimilars} from "../type/Styles";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const getMovies = async (currentPage: number, topFilms: string) => {
    const result = await axios.get<IGetMovies>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${topFilms}&page=${currentPage}`, {
        headers: {
            'X-API-KEY': '0b7929f3-040e-4da6-99f4-be96a2ffd8b8',
            'Content-Type': 'application/json',
        },
    })
    return result.data
}

export const getSearchMovies = async (currentPage: number, keyWord: string) => {
    const keyword = encodeURI(keyWord);
    const result = await axios.get<IGetMovies>(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${currentPage}`, {
        headers: {
            'X-API-KEY': '0b7929f3-040e-4da6-99f4-be96a2ffd8b8',
            'Content-Type': 'application/json',
        },
    })
    return result.data
}

export const filmAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'}),
    endpoints: (build) => ({
        fetchFilmById: build.query<IFilm, number>({
            query: (id: number) => ({
                url: `${id}`,
                params: {},
                headers: {
                    'X-API-KEY': '0b7929f3-040e-4da6-99f4-be96a2ffd8b8',
                    'Content-Type': 'application/json',
                }
            })
        })
    })
})

export const similarsAPI = createApi({
    reducerPath: 'similarsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'}),
    endpoints: (build) => ({
        fetchSimilars: build.query<IGetSimilars, number>({
            query: (id: number) => ({
                url: `${id}/similars`,
                params: {},
                headers: {
                    'X-API-KEY': '0b7929f3-040e-4da6-99f4-be96a2ffd8b8',
                    'Content-Type': 'application/json',
                }
            })
        })
    })
})

export const actorsAPI = createApi({
    reducerPath: 'actorsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kinopoiskapiunofficial.tech/api/v1/'}),
    endpoints: (build) => ({
        fetchActors: build.query<IActors[], number>({
            query: (id: number) => ({
                url: 'staff/',
                params: {
                    filmId: id
                },
                headers: {
                    'X-API-KEY': '0b7929f3-040e-4da6-99f4-be96a2ffd8b8',
                    'Content-Type': 'application/json',
                }
            })
        })
    })
})

// export const searchMovieAPI = createApi({
//     reducerPath: 'searchMovieAPI',
//     baseQuery: fetchBaseQuery({baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.1/films/'}),
//     endpoints: (build) => ({
//         fetchSearchMovie: build.query<ISearchMovie, string | number>({
//             query: (name: string, page: number) => ({
//                 url: 'search-by-keyword',
//                 params: {
//                     keyword: name,
//                     page: page
//                 },
//                 headers: {
//                     'X-API-KEY': '0b7929f3-040e-4da6-99f4-be96a2ffd8b8',
//                     'Content-Type': 'application/json',
//                 }
//             })
//         })
//     })
// })

