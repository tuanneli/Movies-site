import {Styles} from "../type/Styles";
import {getMovies, getSearchMovies} from "../components/API";
import {AxiosError} from "axios";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatchType} from "./store/store";

export interface ITopFilmsState {
    films: Styles[],
    currentPage: number,
    topFilms: string,
    isLoading: boolean,
    error: string,
    pagesCount: number,
    keyWord?: string | null,
}

const initialState: ITopFilmsState = {
    films: [] as Styles[],
    currentPage: 1,
    topFilms: 'TOP_100_POPULAR_FILMS',
    isLoading: false,
    error: '',
    pagesCount: 0,
    keyWord: window.localStorage.getItem('searchValue'),
}

export const filmsSlice = createSlice({
    name: 'topFilms',
    initialState,
    reducers: {
        setKeyWord(state, action: PayloadAction<string>) {
            state.keyWord = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        filmsFetchingStart(state) {
            state.isLoading = true
        },
        filmsFetchingSuccess(state, action: PayloadAction<Styles[]>) {
            state.isLoading = false;
            state.error = '';
            state.films = action.payload;
        },
        pagesFetchingSuccess(state, action: PayloadAction<number>) {
            state.isLoading = false;
            state.error = '';
            state.pagesCount = action.payload;
        },
        filmsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setTopFilms(state, action: PayloadAction<string>) {
            state.topFilms = action.payload;
            state.keyWord = '';
            window.localStorage.setItem('searchValue', '')
        },
    }
})

export default filmsSlice.reducer;

export const getTopFilms = (currentPage: number, topFilms: string) => {
    return async (dispatch: AppDispatchType) => {
        try {
            dispatch(filmsSlice.actions.filmsFetchingStart())
            const result = await getMovies(currentPage, topFilms)
            dispatch(filmsSlice.actions.filmsFetchingSuccess(result.films))
            dispatch(filmsSlice.actions.pagesFetchingSuccess(result.pagesCount))
        } catch (e: any) {
            const Error: AxiosError = e;
            dispatch(filmsSlice.actions.filmsFetchingError(Error.message))
        }
    }
}

export const getSearchedMovies = (currentPage: number, keyWord: string) => {
    return async (dispatch: AppDispatchType) => {
        try {
            dispatch(filmsSlice.actions.filmsFetchingStart())
            const result = await getSearchMovies(currentPage, keyWord)
            dispatch(filmsSlice.actions.filmsFetchingSuccess(result.films))
        } catch (e: any) {
            const Error: AxiosError = e;
            dispatch(filmsSlice.actions.filmsFetchingError(Error.message))
        }
    }
}
