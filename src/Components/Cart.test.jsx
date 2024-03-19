import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import Cart from './Cart';

describe('Cart Component', () => {
    it('renders empty cart message when cart is empty', () => {
        const state = { cart: [] };
        const dispatch = () => {}; // Mock dispatch function

        render(<Cart state={state} dispatch={dispatch} />);
        const emptyCartMessage = screen.getByText(/cart is empty/i);

        chai.expect(emptyCartMessage).to.exist;
    });

    it('renders cart items when cart is not empty', () => {
        const state = {
            cart: [
                { id: 1, title: 'Item 1', price: 10, qty: 2 },
                { id: 2, title: 'Item 2', price: 15, qty: 1 }
            ]
        };
        const dispatch = () => {}; // Mock dispatch function

        render(<Cart state={state} dispatch={dispatch} />);
        const cartItems = screen.getAllByTestId('cart-item');

        chai.expect(cartItems).to.have.lengthOf(2);
    });

    
    it('calculates total price correctly based on items and quantities', () => {
        const state = {
            cart: [
                { id: 1, title: 'Item 1', price: 10, qty: 2 },
                { id: 2, title: 'Item 2', price: 15, qty: 1 }
            ]
        };
        const dispatch = () => {}; // Mock dispatch function

        render(<Cart state={state} dispatch={dispatch} />);
        const subtotalElement = screen.getByText(/subtotal/i);
        const totalPrice = Number(subtotalElement.textContent.replace(/\D/g, ''));

        chai.expect(totalPrice).to.equal(35); // Assuming the total price should be $35
    });
});
