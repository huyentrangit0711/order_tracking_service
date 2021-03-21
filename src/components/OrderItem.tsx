import React from "react";
import { OrderType } from '../actions/OrderActionTypes'
interface OrderItemProps {
    details: OrderType
}
// type CardProps = {
//     title: string,
//     paragraph: string
// }
//
// export const Card = ({ title, paragraph }: CardProps) => <aside>
//     <h2>{ title }</h2>
//     <p>
//         { paragraph }
//     </p>
// </aside>

const OrderItem = (props: OrderItemProps) => {
    const { id } = props.details
    return (
        <div className="order__item">
            <p>{id}</p>
        </div>
    )
}
export default OrderItem
