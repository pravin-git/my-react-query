import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });

    it('renders empty cart message when cart is empty', () => {
        const state = { cart: [] };
        const dispatch = () => {}; // Mock dispatch function

        render(<Cart state={state} dispatch={dispatch} />);
        const emptyCartMessage = screen.getByText(/cart is empty/i);

        expect(emptyCartMessage).to.exist;
    });

});