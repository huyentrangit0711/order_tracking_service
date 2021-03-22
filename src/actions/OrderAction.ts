import {ORDER_FAIL, ORDER_LOADING, ORDER_SUCCESS, OrderDispatchTypes} from "./OrderActionTypes";
import {Dispatch} from "redux";
import API, {getOrdersLength} from '../api'
/// define action getOrders
export const GetOrders = (page:number = 1, limit:number =5) => async (dispatch:Dispatch<OrderDispatchTypes>) => {
    try {
        dispatch({
            type: ORDER_LOADING
        })
        const response = await API.get(`orders?_page=${page}&_limit=${limit}`)
        const totalResults = await API.get(`orders`)
        console.log('debug', totalResults)
        dispatch({
            type: ORDER_SUCCESS,
            payload: response.data,
            page,
            totalResults: totalResults.data.length
        })
    }
    catch (e) {
        dispatch({
            type: ORDER_FAIL
        })
    }

}
