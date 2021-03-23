import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:3001/`
})
export const getOrdersLength = async () => {
    const res = await axios.get(`http://localhost:3001/orders`)
    const length = res.data && res.data.length
    return length
}
export const getOrdersWithSort = async (fieldName: string = 'updated_time', order: string = 'desc') => {
    const ordersWithSorted = await axios.get(`http://localhost:3001/orders?_sort=${fieldName}&_order=${order}`)
    return ordersWithSorted.data
}