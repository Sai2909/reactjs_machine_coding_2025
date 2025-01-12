import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    products: [], // Changed to an array of products
};

// Creating a slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // Action to add a new product
        createProduct: (state, action) => {
            state.products.push(action.payload);
        },

        // Action to delete a product
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
    }
});

// Export actions
export const { createProduct, deleteProduct } = productSlice.actions;

// Export reducer
export default productSlice.reducer;
