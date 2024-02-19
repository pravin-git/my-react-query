export const cartReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
            break;

        default:
            break;
    }
}