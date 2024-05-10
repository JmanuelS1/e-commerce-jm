import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getToken from '../../utils/getToken'

const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

const purchases = createSlice({
     name: 'purchases',
     initialState: [],
     reducers: {
          setPurchases: (_value, action) => action.payload
     }
});


export const { setPurchases } = purchases.actions

export default purchases.reducer;

export const getPurchasesThunk = () => (dispatch) => {
     axios.get(url, getToken())
     .then(res => dispatch(setPurchases(res.data)))
     .catch(err => console.log(err))
}

export const postPurchasesThunk = (data) => (dispatch) => {
     axios.post(url, data, getToken())
     .then(res => console.log(res.data))
     .catch(err => console.log(err))
}