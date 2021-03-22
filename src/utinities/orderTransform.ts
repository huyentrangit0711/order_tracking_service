import OrderStatus from '../mock/orderstatus.json'
import { OrderType } from "../actions/OrderActionTypes";

// export const orderTransformFromAPI = (orderData: OrderType):OrderType => {
//     const {id, status,customer_name,
//         rider_name, order_address, merchant_name,
//         merchant_address, updated_time, dishes, total_price } = orderData
//     return {
//         id,
//         status,
//         customerName: customer_name,
//         riderName: rider_name,
//         orderAddress: order_address,
//         merchantName: merchant_name,
//         merchantAddress: merchant_address,
//         dishes,
//         totalPrice: total_price,
//         updatedTime: updated_time
//     }
// }
export const orderStatusTransformFromAPI = (orderStatus: number)  => {
    return OrderStatus
        .filter((order: {order_status_id: number, order_status_name: string, order_status_description ?: string }) => order.order_status_id === orderStatus)
}
export const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
}
