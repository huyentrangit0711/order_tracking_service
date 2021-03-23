import {ORDER_FAIL, ORDER_LOADING, ORDER_SUCCESS, OrderDispatchTypes, OrderFilter, ORDER_FILTER_BY_FIELD_NAME} from "./OrderActionTypes";
import {Dispatch} from "redux";
import API from '../api'
import { orderTransformFromAPI } from '../utinities/orderTransform'

/// define action getOrders
export const GetOrders = (filters?: Array<OrderFilter>,
                          page:number = 1,
                          limit:number = 5,
                          fieldName: string = 'updated_time',
                          order: string = 'desc',

) =>
    async (dispatch:Dispatch<OrderDispatchTypes>) => {
    try {
        dispatch({
            type: ORDER_LOADING
        })
        const response = await API.get(`orders?_page=${page}&_limit=${limit}?_sort=${fieldName}&_order=${order}`)
        const totalResults = await API.get(`orders`)
        const transformOrderData = orderTransformFromAPI(response.data)
        dispatch({
            type: ORDER_SUCCESS,
            payload: transformOrderData,
            page,
            totalResults: totalResults.data.length
        })
        if (filters && filters.length) {
            dispatch({
                type: ORDER_FILTER_BY_FIELD_NAME,
                payload: filters,
                page,
                totalResults: totalResults.data.length
            })
        }
    }
    catch (e) {
        dispatch({
            type: ORDER_FAIL
        })
    }

}
