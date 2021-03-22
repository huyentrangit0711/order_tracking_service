import React, {useState} from 'react';
import {range} from '../utinities/orderTransform'
export interface Props {
    currentPage: number;
    totalPages: number;
    handlePagination: (page: number) => void;
}
export const PaginationComponent: React.FC<Props> = ({
                                                         currentPage: page,
                                                         totalPages,
                                                         handlePagination,
                                                     }) => {
    const paginationArr = range(1, totalPages)
    console.log('paginationArr', paginationArr)
    return (

        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        paginationArr.map((num: number, index) => {
                            return <li className={"page-item " + (page === num ? "active": "")} key={index} onClick={() => handlePagination(num)}>
                                <button className="page-link">{num}</button>
                            </li>
                        })
                    }
                    {/*{page !== 1 && (*/}
                    {/*    <li className="page-item"*/}
                    {/*        onClick={() => handlePagination(page - 1)}*/}
                    {/*    >*/}
                    {/*        Previous*/}
                    {/*    </li>*/}
                    {/*)}*/}
                    {/*<li className={"page-item " + (page === currentPage ? 'active' : '')}*/}
                    {/*    onClick={() => handlePagination(1)}*/}
                    {/*>*/}
                    {/*    <button className="page-link">{1}</button>*/}
                    {/*</li>*/}
                    {/*{page !== 1 && page !== totalPages && (*/}
                    {/*    <li className="page-item active"*/}
                    {/*        onClick={() => handlePagination(page)}*/}
                    {/*    >*/}
                    {/*        <button className="page-link">heeee{page}</button>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                    {/*{page === totalPages && totalPages > 3 && (*/}
                    {/*    <li className="page-item"*/}
                    {/*        onClick={() => handlePagination(page - 2)}*/}
                    {/*    >*/}
                    {/*        <button className="page-link">{page - 2}</button>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                    {/*{page > 2 && (*/}
                    {/*    <li className="page-item"*/}
                    {/*        onClick={() => handlePagination(page - 1)}*/}
                    {/*    >*/}
                    {/*        <button className="page-link">{page - 1}</button>*/}
                    {/*    </li>*/}
                    {/*)}*/}

                    {/*{page < totalPages - 1 && (*/}
                    {/*    <li className="page-item"*/}
                    {/*        onClick={() => handlePagination(page + 1)}*/}
                    {/*    >*/}
                    {/*        <button className="page-link">{page + 1}</button>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                    {/*{page === 1 && totalPages > 3 && (*/}
                    {/*    <li className="page-item"*/}
                    {/*        onClick={() => handlePagination(page + 2)}*/}
                    {/*    >*/}
                    {/*        <button className="page-link">{page + 2}</button>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                    {/*{page < totalPages - 2 && <div>...</div>}*/}
                    {/*<li className="page-item"*/}
                    {/*    onClick={() => handlePagination(totalPages)}*/}
                    {/*>*/}
                    {/*    <button className="page-link">{totalPages}</button>*/}
                    {/*</li>*/}
                    {/*{page !== totalPages && (*/}
                    {/*    <li className="page-item"*/}
                    {/*        onClick={() => handlePagination(page + 1)}*/}
                    {/*    >*/}
                    {/*        <button className="page-link"> &gt;</button>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                </ul>
            </nav>
            <div>



            </div>
        </div>
    );
};
export const Pagination = PaginationComponent;