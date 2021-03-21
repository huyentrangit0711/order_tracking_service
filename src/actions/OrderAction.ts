import {ORDER_FAIL, ORDER_LOADING, ORDER_SUCCESS, OrderDispatchTypes} from "./OrderActionTypes";
import {Dispatch} from "redux";
import API from '../api'
/// define action getOrders
export const GetOrders = () => async (dispatch:Dispatch<OrderDispatchTypes>) => {
    try {
        dispatch({
            type: ORDER_LOADING
        })
        const response = await API.get('orders')
        dispatch({
            type: ORDER_SUCCESS,
            payload: response.data
        })
    }
    catch (e) {
        dispatch({
            type: ORDER_FAIL
        })
    }

}
