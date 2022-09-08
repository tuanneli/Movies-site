import React from 'react';

const PagesCarouselOld = () => {
    return (
        <div>

        </div>
    );
};

export default PagesCarouselOld;

// import React, {Dispatch, useState} from 'react';
//
// interface IPagesCarousel {
//     pagesCount: number
//     currentPage: number
//     setCurrentPage: Dispatch<number>
// }
//
// const PagesCarousel = ({pagesCount, currentPage, setCurrentPage}: IPagesCarousel) => {
//     const [portionNumber, setPortionNumber] = useState<number>(1)
//
//     let pages: number[] = []
//     const portionSize: number = 5;
//     let leftPortion: number;
//     let rightPortion: number;
//     if (currentPage > 2 && currentPage + 3 <= pagesCount) {
//         leftPortion = currentPage - 2;
//         rightPortion = portionSize + currentPage - 3;
//     } else if (currentPage + 3 >= pagesCount) {
//         leftPortion = pagesCount - 4;
//         rightPortion = portionSize + currentPage - 3;
//     } else {
//         leftPortion = 1;
//         rightPortion = portionSize;
//     }
//
//     for (let i = 1; i <= pagesCount; i++) {
//         pagesCount !== 1 && pages.push(i)
//     }
//
//     return (
//         <div className='text-white d-flex justify-content-center py-2 pb-1'>
//             {pages.filter(pages => pages >= leftPortion && pages <= rightPortion).map(page => <p key={page}
//                                                                                                  onClick={() => setCurrentPage(page)}
//                                                                                                  className={page === currentPage ? 'selectedPage' : 'page'}>{page}</p>)}
//         </div>
//     );
// };
//
// export default PagesCarousel;