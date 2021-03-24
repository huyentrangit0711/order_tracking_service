import React from 'react';
import { Pagination } from './Pagination';
import {useDispatch, useSelector} from "react-redux";
import { GetOrders } from "../actions/OrderAction";
import {RootStore} from "../Store";
export interface Props {
    totalPages: number
}

export const PaginationContainer = (props: Props) => {
    const dispatch = useDispatch()
    const orderState = useSelector((state:RootStore) => state.order)
    const appliedFilters = orderState.appliedFilters
    const totalPages = props.totalPages;
    const handlePages = (updatePage: number) => {
        dispatch(GetOrders(appliedFilters,updatePage))
    }
    return (
        <div className="container">
            {
                orderState.page && <Pagination
                    currentPage={orderState.page}
                    totalPages={totalPages}
                    handlePagination={handlePages}
                />
            }

        </div>
    );
};
