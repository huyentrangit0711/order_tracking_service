import React from "react";
// import { OrderType } from '../actions/OrderActionTypes'
// interface OrderItemProps {
//     details: OrderType
// }
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
// id
// status
// customer name
// merchant name
// updated time, last 5, last 10, last 15 min
const Filter = () => {
    return (
        <div className="order__filter">
            <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="id">ID</option>
                <option value="status">Status</option>
                <option value="customer_name">Customer name</option>
                <option value="merchant_name">Merchant name</option>
                <option value="updated_time">Updated time</option>
            </select>
            <input type="text" className="form-control" placeholder="ID" aria-label="ID"
                   aria-describedby="basic-addon1"/>
        </div>
    )
}
export default Filter
