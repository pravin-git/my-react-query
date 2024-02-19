import { React, useEffect, useReducer } from 'react';
import { fetchProducts } from '../api/api';
import { cartReducer } from '../Reducers/cartReducer';
import axios from 'axios'
import Cart from './Cart';
import Products from './Products';

const MyShoppingCart = () => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: [],
        cart: []
    })

    console.log(state)

    const fetchProducts = async () => {
        const {data}  = await axios.get("https://dummyjson.com/products");
        dispatch({
            type: "GET_PRODUCTS",
            payload: data.products
        })
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    return (
        <div style={{display:'flex'}}>
            {state.products && <Products state={state} dispatch={dispatch} />}
            {<Cart state={state} dispatch={dispatch}/>}
        </div>
    )
}

export default MyShoppingCart
