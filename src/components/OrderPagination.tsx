import React from "react";
interface OrderItemProps {
    totalResults: number,
    pageLimits: number
}

const OrderPagination = (props: OrderItemProps) => {
    const { totalResults, pageLimits } = props
    const rangePagination: number = Math.ceil(totalResults / pageLimits)
    const range = (from: number, to: number, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }
    const paginationArray = range(1, rangePagination)
    const handleClick = (event: any) => {
        event.preventDefault();
        console.log(event.target.value); // alerts BUTTON
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    paginationArray.map((num: number, index) => {
                        return <li className="page-item" key={index}>
                            <a className="page-link" href="#" onClick={handleClick}>{num}</a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
export default OrderPagination
