import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getToken from '../../utils/getToken'
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1'

const cart = createSlice({
     name: 'cart',
     initialState: [],
     reducers: {
          setCart: (_value, action) => action.payload,
          addCart: (value, action) => [...value, action.payload], //tambien puede ser {value.push(action.payload)}
          delCart: (value, action) => value.filter(prod => prod.id !== action.payload),
          putCart: (value, action) => value.map(prod => {
               const {quantity, id} = action.payload;
               return prod.id === id ?
               {...prod, quantity: quantity} :
               prod;
          }),
     }
})

export const { setCart, addCart, delCart, putCart } = cart.actions;

export default cart.reducer;

export const getCartThunk = (path) => (dispatch) => {
     const url = `${urlBase}${path}`;
     axios.get(url, getToken())
          .then(res => dispatch(setCart(res.data)))
          .catch(err => console.log(err))
}

export const postCartThunk = (path, data) => dispatch => {
     const url = `${urlBase}${path}`;
     axios.post(url, data, getToken())
          .then(res => dispatch(addCart(res.data)))
          .catch(err => console.log(err))
}

export const deleteCardThunk = (path, id) => dispatch => {
     const url = `${urlBase}${path}/${id}`;
     axios.delete(url, getToken())
          .then(() => {
               dispatch(delCart(id))
               console.log('deleted succesfully')
          })
          .catch(err => console.log(err))
}

export const putCartThunk = (path, data, id) => dispatch => {
     const url = `${urlBase}${path}/${id}`;
     axios.put(url, data, getToken())
     .then(res => dispatch(putCart(res.data)))
     .catch(err => console.log(err))
}