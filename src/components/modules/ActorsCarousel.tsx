import React from "react";
import './FilmCarousel.css'
import {IActors, ISimilar} from "../../type/Styles";
import Slider from "react-slick";
import {filmSlice} from "../../redux/film-page-reducer";
import {useAppDispatch} from "../../redux/redux";
import {NavLink, useParams} from "react-router-dom";

interface IMyCarousel {
    data: IActors[] | undefined
    carouselHeader: string
}

export const ActorsCarousel = ({data, carouselHeader}: IMyCarousel) => {
    let sliders:number = 5;

    (data?.length as number < 5) ? sliders = data?.length as number : sliders = 5;

    const settings = {
        speed: 500,
        slidesToShow: sliders,
        slidesToScroll: sliders,
        initialSlide: 0,
        rows: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                }
            }
        ]
    };

    const dispatch = useAppDispatch()

    const onImageClickHandler = (filmId: number) => {
        dispatch(filmSlice.actions.setFilmId(filmId))
        window.localStorage.setItem('currentFilmId', JSON.stringify(filmId))
    }
    return (
        <div style={{paddingRight: '3.6em', paddingLeft: '3.6em'}}>
            <h2 className='carouselHeaderStyle pt-5'> {carouselHeader} </h2>
            <Slider {...settings}>
                {data?.map(item => {
                    return (

                        <div key={item.staffId}
                                 // to={`/film/${item.staffId}`}
                                 draggable={"false"}
                                 className={'ActorsHandle'}>
                            <img className={'sliderElement'}
                                 draggable={"false"}
                                 onClick={() => onImageClickHandler(item.staffId)}
                                 src={item.posterUrl} alt=""/>
                            <div className={'sliderElementBack fs-6'}>
                                <p className='backCardText'>{item.nameRu} {item.nameEn !== "" && '/ ' + item.nameEn}</p>
                                <hr className='division'/>
                                 {item.description !== null &&
                                   <>
                                     <p className='backCardText'>{item.description}</p>
                                     <hr className='division'/>
                                   </>}
                                <p className='backCardText'>{item.professionText.slice(0, -1)}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );

}

export default ActorsCarousel;