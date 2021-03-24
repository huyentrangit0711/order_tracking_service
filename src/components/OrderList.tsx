import React from "react";
import {useSelector} from "react-redux";
import {RootStore} from "../Store";
import OrderTable from "./OrderTable";
interface OrderListProps {}

const OrderList = (props: OrderListProps) => {
    const orderState= useSelector((state:RootStore) => state.order)
    let orders = orderState.orders
    return (
        <div>
            {
                orders && <OrderTable ordersList={orders}/>

            }

                {orders && orders.length}

        </div>

    )
}
export default OrderList
