import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk for fetching product data from Fake Store API
export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (productId) => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data from Fake Store API');
        }
        const data = await response.json();
        return {
            productName: data.title, // Product title from the API
            productPrice: `$${data.price}`, // Format the price with a dollar sign
            isAvailable: true, // Assume the product is available if the request succeeds
        };
    }
);

const initialState = {
    productName: '',
    productPrice: '',
    isAvailable: false,
    status: 'idle', // To track loading state
    error: null, // To track errors
};

const productSlice = createSlice({
    name: 'nasa',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.productName = action.payload.productName;
            state.productPrice = action.payload.productPrice;
            state.isAvailable = action.payload.isAvailable;
        },
        setAvailability: (state, action) => {
            state.isAvailable = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle the 'pending' state when the async action is started
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading'; // Update loading status
            })
            // Handle the 'fulfilled' state when the async action is successful
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Update to succeeded state
                state.productName = action.payload.productName;
                state.productPrice = action.payload.productPrice;
                state.isAvailable = action.payload.isAvailable;
            })
            // Handle the 'rejected' state when the async action fails
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed'; // Update to failed state
                state.error = action.error.message;
            });
    },
});

export const { setProduct, setAvailability } = productSlice.actions;
export default productSlice.reducer;
