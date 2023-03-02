import { configureStore } from '@reduxjs/toolkit'
import countreducer from './CounterSlice'
import traveldatareducer from './traveldataSlice'


export default configureStore({
    reducer: { count: countreducer, traveldata: traveldatareducer },
})