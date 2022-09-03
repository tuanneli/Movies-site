import {IFilms} from "../type/IFilms";
import {Action, ActionCreator, Dispatch} from "redux";
import {getMovies} from "../components/API";
import {AxiosError} from "axios";
import {ThunkAction} from "redux-thunk";
import {markAsUntransferable} from "worker_threads";

const ADD_FILMS = 'ADD_FILMS';

type ITopFilmsAction = IAddFilms

export interface ITopFilmsState {
    films: IFilms[],
    currentPage: number,
    topFilms: string,
}


const initialState: ITopFilmsState = {
    films: [],
    currentPage: 1,
    topFilms: 'TOP_100_POPULAR_FILMS',
}

export const topsPageReducer = (state: ITopFilmsState = initialState, action: ITopFilmsAction) => {
    switch (action.type) {
        case ADD_FILMS: {
            return {
                ...state,
                films: [...action.payload]
            }
        }
        default:
            return state;
    }
}

export interface IAddFilms {
    type: typeof ADD_FILMS,
    payload: IFilms[]
}

export const addFilms = (films: IFilms[]): IAddFilms => ({type: ADD_FILMS, payload: films})

export const getTopFilms = (currentPage: number, topFilms: string) => {
    return async (dispatch: Dispatch<ITopFilmsAction>) => {
        try {
            // setIsLoading(true)
            const result = await getMovies(currentPage, topFilms)
            return dispatch(addFilms(result.films))
            // setFilms(result.films)
            // setPagesCount(result.pagesCount)
            // setIsLoading(false)
        } catch (e: any) {
            // setIsLoading(false)
            const Error: AxiosError = e;
            // setError(Error.message)
        }
    }
}
