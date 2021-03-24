import {
    ORDER_FAIL,
    ORDER_LOADING,
    ORDER_SUCCESS,
    ORDER_FILTER_BY_FIELD_NAME,
    OrderDispatchTypes,
     OrderFilter
} from "../actions/OrderActionTypes";
import { filterByFieldName } from '../utinities/orderTransform'
interface IOrderState {
    loading?: boolean,
    orders ?: any,
    page?: number,
    totalResults?: number,
    appliedFilters?: Array<OrderFilter>
}
const initialState: IOrderState = {
    loading: false,
    orders: [],
    appliedFilters: []
}
const orderReducer = (
    state: IOrderState = initialState,
    action: OrderDispatchTypes
):IOrderState => {
    switch (action.type) {
        case ORDER_FAIL:
            return {
                loading: false
            }
        case ORDER_LOADING:
            return {
                loading: true,
                appliedFilters: []
            }
        case ORDER_SUCCESS:
            return {
                orders: action.payload,
                page: action.page,
                totalResults: action.totalResults,
                appliedFilters: []
            }
        case ORDER_FILTER_BY_FIELD_NAME:
            const filterConfig = action.payload
            const filterData= filterConfig.map((filterConfig) => {
                const { filterValue, filterName } = filterConfig
                return state.orders && filterByFieldName(state.orders, filterName, filterValue)
            })
<<<<<<< HEAD
=======
            // console.log('debug123', state.orders &&
            //     filterByFieldName(state.orders, 'filter_updatedTime', '5'))
            console.log('filterData', filterData)
>>>>>>> a8cac45c09fa7a65914a989eea3765161099f273
            return {
                loading: false,
                orders: filterData[0],
                totalResults: filterData.length,
                appliedFilters: filterConfig
            }
    }
    return state
}
export default orderReducer
