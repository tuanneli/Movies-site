interface ICountry {
    country: string
}

interface IGenres {
    genre: string
}

export interface IFilms {
    countries: ICountry[]
    filmId: number
    filmLength: number | null
    genres: IGenres[]
    nameEn: string | null
    nameRu: string
    posterUrl: string
    posterUrlPreview: string
    rating: string
    ratingChange: string | null
    ratingVoteCount: number
    year: string
}

export interface IGetFilms {
    films: [IFilms]
    pagesCount: number
}