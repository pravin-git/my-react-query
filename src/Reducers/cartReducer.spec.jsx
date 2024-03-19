import { expect } from 'chai';
import { cartReducer } from './cartReducer'; // Update the path accordingly

describe('cartReducer', () => {
    it('updates products array when GET_PRODUCTS action is dispatched', () => {
        const initialState = { products: [] };
        const action = { type: 'GET_PRODUCTS', payload: [{ id: 1, name: 'Product 1' }] };
        const newState = cartReducer(initialState, action);
        expect(newState.products).to.deep.equal([{ id: 1, name: 'Product 1' }]);
    });

    it('adds a product to cart array when ADD_TO_CART action is dispatched', () => {
        const initialState = { cart: [] };
        const action = { type: 'ADD_TO_CART', payload: { id: 1, name: 'Product 1' } };
        const newState = cartReducer(initialState, action);
        expect(newState.cart).to.deep.equal([{ id: 1, name: 'Product 1' }]);
    });

    it('removes a product from cart array when REMOVE_FROM_CART action is dispatched', () => {
        const initialState = { cart: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }] };
        const action = { type: 'REMOVE_FROM_CART', payload: { id: 1 } };
        const newState = cartReducer(initialState, action);
        expect(newState.cart).to.deep.equal([{ id: 2, name: 'Product 2' }]);
    });

    it('updates quantity of a product in cart array when CHANGE_QTY action is dispatched', () => {
        const initialState = { cart: [{ id: 1, name: 'Product 1', qty: 1 }] };
        const action = { type: 'CHANGE_QTY', payload: { id: 1, qty: 2 } };
        const newState = cartReducer(initialState, action);
        expect(newState.cart).to.deep.equal([{ id: 1, name: 'Product 1', qty: 2 }]);
    });

    it('returns current state for unknown action type', () => {
        const initialState = { cart: [] };
        const action = { type: 'UNKNOWN_ACTION', payload: {} };
        const newState = cartReducer(initialState, action);
        expect(newState).to.deep.equal(initialState);
    });
});
