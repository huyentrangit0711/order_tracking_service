export const ORDER_LOADING = "ORDER_LOADING"
export const ORDER_SUCCESS = "ORDER_SUCCESS"
export const ORDER_FAIL = "ORDER_FAIL"
export const ORDER_FILTER_BY_FIELD_NAME = "ORDER_FILTER_BY_FIELD_NAME"
export type OrderType = {
    id: string | number,
    status: string,
    customerName: string,
    riderName: string,
    orderAddress: string,
    merchantName: string,
    merchantAddress: string,
    dishes: OrderDish[],
    totalPrice: number,
    updatedTime: string
}
export type OrderDish = {
    name: string,
    price: number
}
export type OrderFilter = {
    filterName: string,
    filterValue: string
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
export interface OrderFilterByFieldName {
    type: typeof ORDER_FILTER_BY_FIELD_NAME,
    payload: Array<OrderFilter>,
}
export const filterUpdatedTimeOptions = [
    {
    value: '5',
    text: 'Last 5 minutes'
    },
    {
        value: '10',
        text: 'Last 10 minutes'
    },
    {
        value: '15',
        text: 'Last 15 minutes'
    }
]
export type OrderDispatchTypes = OrderLoading | OrderFail | OrderSuccess | OrderFilterByFieldName
