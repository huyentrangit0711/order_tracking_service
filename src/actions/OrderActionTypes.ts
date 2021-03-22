export const ORDER_LOADING = "ORDER_LOADING"
export const ORDER_SUCCESS = "ORDER_SUCCESS"
export const ORDER_FAIL = "ORDER_FAIL"
export type OrderType = {
    id: string | number,
    status: number,
    customer_name: string,
    rider_name: string,
    order_address: string,
    merchant_name: string,
    merchant_address: string,
    dishes: OrderDish[],
    total_price: number,
    updated_time: string
}
export type OrderDish = {
    name: string,
    price: number
}
export interface OrderLoading {
    type: typeof ORDER_LOADING
}

export interface OrderFail {
    type: typeof ORDER_FAIL
}

export interface OrderSuccess {
    type: typeof ORDER_SUCCESS,
    payload: Array<OrderType>,
    page: number,
    totalResults: number
}
export type OrderDispatchTypes = OrderLoading | OrderFail | OrderSuccess
