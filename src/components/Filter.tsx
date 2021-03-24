import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { GetOrders } from "../actions/OrderAction";
import { OrderFilter, filterUpdatedTimeOptions, filterButtons } from '../actions/OrderActionTypes'
import SelectElement from './SelectElement'
import {useSelector} from "react-redux"
import {RootStore} from "../Store";
import OrderStatus from '../mock/orderstatus.json'
import ButtonElement from "./ButtonElement";
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
        const filters: Array<OrderFilter> = [{
            filterName: event.currentTarget.id,
            filterValue: keyword
        }]
        dispatch(GetOrders(filters))
    }
    const isActiveButton = (filedId: string) => {
        const isExistFilter = appliedFilters && appliedFilters.filter((filter) => {
            return filter.filterName === filedId
        })
        return isExistFilter && isExistFilter.length > 0
    }
    const handleFilterStatus = (option: string) => {
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
    const orderStatusOptions = OrderStatus.map((orderStatus) => {
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
                {filterButtons.map((filterButton, index) => {
                    return <ButtonElement
                        key={index}
                        buttonText={filterButton.text}
                        buttonId={filterButton.id}
                        isActive={appliedFilters && isActiveButton(filterButton.id)}
                        isHidden={keyword.length === 0}
                        handleClick={handleClick}/>
                })}
                <SelectElement options={orderStatusOptions}
                               defaultOption={'Status'}
                               handleSelect={handleFilterStatus} />

                <SelectElement options={filterUpdatedTimeOptions}
                               defaultOption={'Updated time'}
                               handleSelect={handleFilterUpdatedTime} />
            </div>

        </div>
    )
}
export default Filter
