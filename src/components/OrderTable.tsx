import React from "react";
import { OrderType } from '../actions/OrderActionTypes'
import { PaginationContainer } from './PaginationContainer'
import Filter from './Filter'
import {useSelector} from "react-redux";
import {RootStore} from "../Store";
import EmptyRowsView from './EmptyResults'
import TotalOrder from "./TotalOrder";
interface OrderItemProps {
    ordersList: Array<OrderType>
}
const OrderTable = (props: OrderItemProps) => {
    const pageLimits :number = 5
    const totalResults = useSelector((state:RootStore) => state.order).totalResults

    return (
        <div className="order__table">
            <Filter />
            {
                totalResults && <TotalOrder totalNumber={totalResults} />
            }
            {
                props.ordersList.length ?
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
                        {props.ordersList.length && props.ordersList.map((orderData, index) => {
                            const {
                                id,
                                status,
                                customerName,
                                riderName,
                                orderAddress,
                                merchantName,
                                merchantAddress,
                                totalPrice,
                                updatedTime
                            } = orderData
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1 }</th>
                                    <td>{id}</td>
                                    <td>{status}</td>
                                    <td>{customerName}</td>
                                    <td>{riderName}</td>
                                    <td>{orderAddress}</td>
                                    <td>{merchantName}</td>
                                    <td>{merchantAddress}</td>
                                    <td>{totalPrice}</td>
                                    <td>{updatedTime}</td>
                                </tr>
                            )
                        })
                        }

                        </tbody>
                    </table>
                    : <EmptyRowsView/>

            }



            {totalResults && <PaginationContainer totalPages={Math.ceil(totalResults/pageLimits)}/>}
        </div>
    )
}
export default OrderTable
