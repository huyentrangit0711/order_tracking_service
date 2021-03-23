import React from 'react'
interface Props {
    totalNumber: number
}
const TotalResults = (props: Props) => {
    return (
        <button type="button" className="btn btn-primary float-right mb-4">
            Total Order: <span className="badge badge-light">{props.totalNumber}</span>
        </button>
    );
}
export default TotalResults
