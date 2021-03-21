import { combineReducers } from 'redux'
import orderReducer from './OrderReducer'
const RootReducer = combineReducers({
    order: orderReducer
})
export default RootReducer
