import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:3001/`
})
export const getOrdersLength = async () => {
    const res = await axios.get(`http://localhost:3001/orders`)
    console.log('res',res)
    const length = res.data && res.data.length
    return length
}