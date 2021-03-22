import React from "react";
import { OrderType } from '../actions/OrderActionTypes'
import { PaginationContainer } from './PaginationContainer'
import { getOrdersLength } from '../api'
import {useSelector} from "react-redux";
import {RootStore} from "../Store";
interface OrderItemProps {
    ordersList: Array<OrderType>
}
const OrderTable = (props: OrderItemProps) => {
    const pageLimits :number = 5
    const totalResults = useSelector((state:RootStore) => state.order).totalResults

    return (
        <div className="order__table">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Customer name</th>
                    <th scope="col">Rider name</th>
                    <th scope="col">Order address</th>
                    <th scope="col">Merchant name</th>
                    <th scope="col">Merchant address</th>
                    <th scope="col">Total price</th>
                    <th scope="col">Updated time</th>
                </tr>
                </thead>
                <tbody>
                {props.ordersList && props.ordersList.map((orderData) => {
                    const {
                        id,
                        status,
                        customer_name,
                        rider_name,
                        order_address,
                        merchant_name,
                        merchant_address,
                        total_price,
                        updated_time
                    } = orderData
                    return (
                        <tr key={orderData.id}>
                            <th scope="row">1</th>
                            <td>{id}</td>
                            <td>{status}</td>
                            <td>{customer_name}</td>
                            <td>{rider_name}</td>
                            <td>{order_address}</td>
                            <td>{merchant_name}</td>
                            <td>{merchant_address}</td>
                            <td>{total_price}</td>
                            <td>{updated_time}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
            {totalResults && <PaginationContainer totalPages={Math.ceil(totalResults/pageLimits)}/>}
        </div>
    )
}
export default OrderTable
