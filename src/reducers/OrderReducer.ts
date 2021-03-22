import {
    ORDER_FAIL,
    ORDER_LOADING,
    ORDER_SUCCESS,
    OrderDispatchTypes,
    OrderType
} from "../actions/OrderActionTypes";
interface IOrderState {
    loading: boolean,
    orders ?: Array<OrderType>,
    page?: number,
    totalResults?: number
}
const initialState: IOrderState = {
    loading: false,
    orders: []
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
                loading: true
            }
        case ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
                page: action.page,
                totalResults: action.totalResults
            }
    }
    return state
}
export default orderReducer
