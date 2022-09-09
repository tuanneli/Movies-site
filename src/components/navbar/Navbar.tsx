import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch} from "../../redux/redux";
import {filmsSlice} from "../../redux/tops-page-reducer";
import {Link, NavLink} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState<string>('')
    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handelSubmitSearch = (e: any) => {
        dispatch(filmsSlice.actions.setKeyWord(searchValue))
        window.localStorage.setItem('searchValue', JSON.stringify(searchValue))
        setSearchValue('')
    }

    return (
        <nav className="navbar navbar-expand-lg position-fixed">
            <div className="container-fluid">
                <div className="navbar-brand text-white" style={{userSelect: "none"}}>IFilms</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <div style={{width: '30px', height: '3px', backgroundColor: 'white', margin: '6px 0'}}/>
                    <div style={{width: '30px', height: '3px', backgroundColor: 'white', margin: '6px 0'}}/>
                    <div style={{width: '30px', height: '3px', backgroundColor: 'white', margin: '6px 0'}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-white" aria-current="page"
                                     to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/favorites">Избранное</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                               data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Топ
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item"
                                          to={'/top'}
                                          style={{cursor: "pointer"}}
                                          onClick={() => dispatch(filmsSlice.actions.setTopFilms('TOP_100_POPULAR_FILMS'))}>
                                    Toп
                                    популярных
                                    фильмов</Link>
                                </li>
                                <li><Link className="dropdown-item"
                                          style={{cursor: "pointer"}}
                                          to={'/top'}
                                          onClick={() => dispatch(filmsSlice.actions.setTopFilms('TOP_250_BEST_FILMS'))}>
                                    Toп
                                    лучших
                                    фильмов</Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><Link className="dropdown-item"
                                          style={{cursor: "pointer"}}
                                          to={'/top'}
                                          onClick={() => dispatch(filmsSlice.actions.setTopFilms('TOP_AWAIT_FILMS'))}>Toп
                                    ожидания</Link></li>
                            </ul>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link disabled">Disabled</a>*/}
                        {/*</li>*/}
                    </ul>

                    <form className="d-flex"
                          role="search">
                        <input className="form-control me-2"
                               type="search"
                               placeholder="Фильмы, сериалы"
                               value={searchValue}
                               onChange={searchInputHandler}
                               aria-label="Search"/>
                        <Link to={'/searched'}>
                            <button className="btn btn-outline-dark text-white border-white"
                                    onClick={handelSubmitSearch}
                                    type="submit">
                                Поиск
                            </button>
                        </Link>
                    </form>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;