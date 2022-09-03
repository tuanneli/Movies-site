import axios from "axios";
import {IFilms} from "../type/IFilms";

interface IGetMovies {
    films: IFilms[]
    pagesCount: number
}

// interface IProps {
//     currentPage: number
//     topFilms: string
// }

export const getMovies = async (currentPage: number, topFilms: string) => {
    const result = await axios.get<IGetMovies>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${topFilms}&page=${currentPage}`, {
        headers: {
            'X-API-KEY': '0b7929f3-040e-4da6-99f4-be96a2ffd8b8',
            'Content-Type': 'application/json',
        },
    })
    // console.log(result)
    return result.data
}