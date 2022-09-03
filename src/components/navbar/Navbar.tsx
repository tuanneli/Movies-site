import React, {Dispatch} from 'react';
import bgImage from '../../assets/2.jpeg'

interface INavbar {
    setTopFilms: Dispatch<string>
}

const Navbar = ({setTopFilms}: INavbar) => {
    return (
        <nav className="navbar navbar-expand-lg position-fixed w-100 bg-white"
             style={{
                 zIndex: '9999',
                 maxWidth: '1600px',
                 backgroundImage: `url(${bgImage})`,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',
             }}
        >
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                               data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Top
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item"
                                       style={{cursor: "pointer"}}
                                       onClick={() => setTopFilms('TOP_100_POPULAR_FILMS')}>
                                    Toп
                                    популярных
                                    фильмов</a>
                                </li>
                                <li><a className="dropdown-item"
                                       style={{cursor: "pointer"}}
                                       onClick={() => setTopFilms('TOP_250_BEST_FILMS')}>
                                    Toп
                                    лучших
                                    фильмов</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item"
                                       style={{cursor: "pointer"}}
                                       onClick={() => setTopFilms('TOP_AWAIT_FILMS')}>Toп
                                    ожидания</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;