import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Styles} from "../type/Styles";

interface IFavoritesState {
    favorites: Styles[]
    favoritesId: number[]

}

const initialFavorites = JSON.parse(window.localStorage.getItem('favorites') as string) as Styles[] ?
    JSON.parse(window.localStorage.getItem('favorites') as string) as Styles[] : []

const initialFavoritesId = JSON.parse(window.localStorage.getItem('favoritesId') as string) as number[] ?
    JSON.parse(window.localStorage.getItem('favoritesId') as string) as number[] : []

const initialState: IFavoritesState = {
    favorites: initialFavorites,
    favoritesId: initialFavoritesId,
}

export const favoritesSlice = createSlice({
    name: 'topFilms',
    initialState,
    reducers: {
        setFavorites(state, action: PayloadAction<Styles>) {
            state.favorites = [...state.favorites, action.payload];
            state.favoritesId = [...state.favoritesId, action.payload.filmId];
            window.localStorage.setItem('favorites', JSON.stringify(state.favorites))
            window.localStorage.setItem('favoritesId', JSON.stringify(state.favoritesId))
        },
        removerFromFavorites(state, action: PayloadAction<number>) {
            state.favorites = state.favorites.filter(item => item.filmId !== action.payload)
            state.favoritesId = state.favoritesId.filter(item => item !== action.payload)
            window.localStorage.setItem('favorites', JSON.stringify(state.favorites))
            window.localStorage.setItem('favoritesId', JSON.stringify(state.favoritesId))
        },
    }
})

export default favoritesSlice.reducer;
