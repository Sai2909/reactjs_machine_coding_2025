// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     productName: '',
//     productPrice: '',
//     isAvailable: ''

// }


// const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {
//         setProduct: (state, action) => {
//             state.productName = action.payload,
//             state.productPrice=action.payload
//         },
//     }
// })

// export const {createProfuct } = productSlice.actions;
// export default productSlice.reducer


import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    productName: '',
    productPrice: '',
    isAvailable: false, // assuming availability is a boolean (true/false)
};

// Creating a slice
const productSlice = createSlice({
    name: 'productss',
    initialState,
    reducers: {
        // Action to set product details
        setProduct: (state, action) => {
            const { productName, productPrice, isAvailable } = action.payload;
            state.productName = productName;
            state.productPrice = productPrice;
            state.isAvailable = isAvailable !== undefined ? isAvailable : state.isAvailable; // If no isAvailable provided, retain previous state
        },
        // Optional: Action to update availability
        setAvailability: (state, action) => {
            state.isAvailable = action.payload;
        },
    }
});

// Export actions
export const { setProduct, setAvailability } = productSlice.actions;

// Export reducer
export default productSlice.reducer;
