import React, {Dispatch, useState} from 'react';
import {useAppDispatch} from "../../redux/redux";
import {filmsSlice} from "../../redux/tops-page-reducer";

interface IPagesCarousel {
    pagesCount: number
    currentPage: number
}

const PagesCarousel = ({pagesCount, currentPage}: IPagesCarousel) => {
    const [portionNumber, setPortionNumber] = useState<number>(1)

    const dispatch = useAppDispatch()

    let pages: number[] = []
    const portionSize: number = 5;
    let leftPortion: number;
    let rightPortion: number;
    if (currentPage > 2 && currentPage + 3 <= pagesCount) {
        leftPortion = currentPage - 2;
        rightPortion = portionSize + currentPage - 3;
    } else if (currentPage + 3 >= pagesCount) {
        leftPortion = pagesCount - 4;
        rightPortion = portionSize + currentPage - 3;
    } else {
        leftPortion = 1;
        rightPortion = portionSize;
    }

    for (let i = 1; i <= pagesCount; i++) {
        pagesCount !== 1 && pages.push(i)
    }

    return (
        <div className='text-white d-flex justify-content-center py-2 pb-1'>
            {pages.filter(pages => pages >= leftPortion && pages <= rightPortion).map(page => <p key={page}
                                                                                                 onClick={() => dispatch(filmsSlice.actions.setCurrentPage(page))}
                                                                                                 className={page === currentPage ? 'selectedPage' : 'page'}>{page}</p>)}
        </div>
    );
};

export default PagesCarousel;

