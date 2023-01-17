import { configureStore } from '@reduxjs/toolkit'
import countreducer from './CounterSlice'


export default configureStore({
    reducer: { count: countreducer },
})