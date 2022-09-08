import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFilmState {
    filmId: number,
}

const currentFilmId = window.localStorage.getItem('currentFilmId')

const initialState: IFilmState = {
    filmId: currentFilmId ? parseInt(currentFilmId) : 0
}

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setFilmId(state, action: PayloadAction<number>) {
            state.filmId = action.payload;
        }
    }
})

export default filmSlice.reducer;