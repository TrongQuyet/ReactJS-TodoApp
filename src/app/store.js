import { configureStore } from '@reduxjs/toolkit'
import rootreducers from '../store/reducers/rootreducers'
export default configureStore({
  reducer: {
    rootreducers:rootreducers,
  },
})
