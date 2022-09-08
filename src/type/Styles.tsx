export interface ICountry {
    country: string
}

export interface IGenres {
    genre: string
}

export interface Styles {
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

export interface IGetMovies {
    films: Styles[]
    keyword?: string
    pagesCount: number
    searchFilmsCountResult?: number
}


export interface IFilm {
    "kinopoiskId": number
    "imdbId": string,
    "nameRu": string,
    "nameEn": string,
    "nameOriginal": string,
    "posterUrl": string,
    "posterUrlPreview": string,
    "coverUrl": string,
    "logoUrl": string,
    "reviewsCount": number,
    "ratingGoodReview": number,
    "ratingGoodReviewVoteCount": number,
    "ratingKinopoisk": number,
    "ratingKinopoiskVoteCount": number,
    "ratingImdb": number,
    "ratingImdbVoteCount": number,
    "ratingFilmCritics": number,
    "ratingFilmCriticsVoteCount": number,
    "ratingAwait": number,
    "ratingAwaitCount": number,
    "ratingRfCritics": number,
    "ratingRfCriticsVoteCount": number,
    "webUrl": string,
    "year": number,
    "filmLength": number,
    "slogan": string,
    "description": string,
    "shortDescription": string,
    "editorAnnotation": string,
    "isTicketsAvailable": boolean,
    "productionStatus": string,
    "type": string,
    "ratingMpaa": string,
    "ratingAgeLimits": string,
    "hasImax": boolean,
    "has3D": boolean,
    "lastSync": string,
    "countries": ICountry[],
    "genres": IGenres[],
    "startYear": number,
    "endYear": number,
    "serial": boolean,
    "shortFilm": boolean,
    "completed": boolean
}

export interface ISimilar {
    filmId: number
    nameEn: string
    nameOriginal: string
    nameRu: string
    posterUrl: string
    posterUrlPreview: string
    relationType: string
}

export interface IGetSimilars {
    total: number,
    items: ISimilar[]
}

export interface IActors {
    "staffId": number
    "nameRu": string
    "nameEn": string
    "description": string
    "posterUrl": string
    "professionText": string
    "professionKey": string
}

export interface ISearchMovie {
    "keyword": string
    "pagesCount": number,
    "searchFilmsCountResult": number,
    "films": any
}