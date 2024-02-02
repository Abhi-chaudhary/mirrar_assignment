import {configureStore} from '@reduxjs/toolkit'
import  searchSlice  from './Slice/searchSlice'
import toggleSlice from './Slice/toggleSlice'
export const store =configureStore(
{
    reducer:{
           search:searchSlice ,
           toggle:toggleSlice
    }
})