import OrderStatus from '../mock/orderstatus.json'
import {OrderFilter, OrderType} from "../actions/OrderActionTypes";
export const orderTransformFromAPI = (orderDatas: Array<any>) :Array<OrderType>=> {
    const transformData = orderDatas.map((order) => {
        const {id, status,customer_name,
            rider_name, order_address, merchant_name,
            merchant_address, updated_time, dishes, total_price } = order
        return {
            id,
            status: orderStatusTransformFromAPI(status),
            customerName: customer_name,
            riderName: rider_name,
            orderAddress: order_address,
            merchantName: merchant_name,
            merchantAddress: merchant_address,
            dishes,
            totalPrice: total_price,
            updatedTime: updated_time
        }
    })

    return transformData
}
export const orderStatusTransformFromAPI = (orderStatus: number)  => {
    const filterOrderStatus = OrderStatus
        .filter((order: {order_status_id: number,
            order_status_name: string,
            order_status_description ?: string }) =>
            order.order_status_id === orderStatus)
    return filterOrderStatus[0].order_status_name
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
export const filterByFieldName = (
    orders: Array<any>,
    filterName: string,
    filterValue: string
)
    :any => {
    const filterNameStr: string = filterName.split('filter_')[1]
    let filterValues = orders.filter(order => {
        if (filterNameStr === 'updatedTime') {
            const conditionTime  = generateTimeLimited(parseInt(filterValue))
            const orderTime = timeValue(order.updatedTime, 0, false)
            return (
                orderTime <= conditionTime.endTime && orderTime >=conditionTime.startTime
            )
        } else {
            return (
                order[filterNameStr].toLowerCase().includes(filterValue)
            );
        }

            });
    return filterValues
}
export const generateTimeLimited = (minutes: number) => {
    return {
        startTime: timeValue('', 0, true),
        endTime: timeValue('', minutes , true)
    }
}
export const timeValue = (time: string = '', addTime: number = 0, isToday: boolean = false) => {
    if (addTime > 0) {
        return isToday ? new Date().valueOf() + (addTime * 60 * 1000) : new Date(time).valueOf() + (addTime * 60 * 1000)
    } else {
        return isToday ? new Date().valueOf() : new Date(time).valueOf()
    }

}
