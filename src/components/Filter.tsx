import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { GetOrders } from "../actions/OrderAction";
import { OrderFilter, filterUpdatedTimeOptions } from '../actions/OrderActionTypes'
import SelectElement from './SelectElement'
import {useSelector} from "react-redux"
import {RootStore} from "../Store";
import OrderStatus from '../mock/orderstatus.json'
const Filter = () => {
    const [keyword, setKeyWord ] = useState('')
    const [activeFilter, setActiveFilter ] = useState('')
    const dispatch = useDispatch()
    const appliedFilters = useSelector((state:RootStore) => state.order).appliedFilters
    // const activeButton = (id: string, appliedFilters: Array<OrderFilter>) => {
    //     const activeButton = appliedFilters.filter((filter) => {
    //         return filter.filterName === id
    //     })
    //     return activeButton
    // }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        // const debug = appliedFilters && activeButton(event.currentTarget.id, appliedFilters)
        // if (debug && debug.length > 0) {
        //     setActiveFilter('active')
        // }
        const filters: Array<OrderFilter> = [{
            filterName: event.currentTarget.id,
            filterValue: keyword
        }]
        dispatch(GetOrders(filters))
    }
    const handleSelect = (option: string) => {
        const filters: Array<OrderFilter> = [{
            filterName: 'filter_status',
            filterValue: option
        }]
        dispatch(GetOrders(filters))
    }
    const handleFilterUpdatedTime = (option: string) => {
        const filters: Array<OrderFilter> = [{
            filterName: 'filter_updatedTime',
            filterValue: option
        }]
        dispatch(GetOrders(filters))
    }
    const selectOptions = OrderStatus.map((orderStatus) => {
        return {
            value: orderStatus.order_status_name,
            text: orderStatus.order_status_name
        }
    })

    return (
        <div className="order__filter">
            <input type="text" className="form-control my-4" placeholder="Search keyword" aria-label="ID"
                   onChange={(event) => setKeyWord(event.target.value)}
                   aria-describedby="basic-addon1"/>

            <div className="form-floating my-4 d-flex flex-row justify-content-between">

                <button type="button"
                        className={"btn btn-outline-primary mx-3"
                        }
                        id="filter_id"
                        onClick={handleClick}>ID</button>
                <button type="button" className="btn btn-outline-primary mx-3"
                        id="filter_customerName"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event)}>Customer name</button>

                <button type="button" className="btn btn-outline-primary mx-3"
                id="filter_riderName"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event)}>Rider name</button>

                <button type="button"
                        className="btn btn-outline-primary mx-3"
                        id="filter_merchantName"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event)}>Merchant name</button>
                <SelectElement options={selectOptions}
                               defaultOption={'Status'}
                               handleSelect={handleSelect} />
                {/*               Filter updated time*/}
                <SelectElement options={filterUpdatedTimeOptions}
                               defaultOption={'Updated time'}
                               handleSelect={handleFilterUpdatedTime} />
            </div>

        </div>
    )
}
export default Filter
