import { createSlice } from "@reduxjs/toolkit";
//createSlice function takes a configuration to create a slice.
const cartSlice = createSlice({
    //1-name of the slice
    name: "cart",
    //2-initialState, what initially this cartSlice will be. basically what will be the cart items.(right now we can give items:[] empty array, cart is empty)
    initialState: {
        items:[]
    },
    //3-reducers,inside this we will write reducer functions corresponding to required actions for this cartSlice. Actions can be add item, remove item, clear cart. These thing are actions(kind of like an API to communicate with a redux store). To add item, we will dispatch the addItem. So addItem is an action and it have a reducer function attached to it and it(attached reducer function) actually modifies the data into our Slice. 
    // The reducer function gets access to the 'state' of the Slice, and it also gets access to 'action'. Now it will modify 'state' according to 'action'. 'state' is basically the 'initialState'.
    reducers:{
       addItem: (state,action) => {
        //mutating the state(existing state) over here.'state' points to the initialState object which is a copy of initialState that immer uses to compare it with initialState stored in store.
            state.items.push(action.payload);
       },
       removeItem: (state) => {
            state.items.pop();
       },
       clearCart: (state) => {
            state.items.length = 0;
       }
    }
})
/*
 When we will do:
 const cartSlice = createSlice({...});
 createSlice() will return an object in the cartSlice, this object will look like:
 * cartSlice:
 *{
 * actions:{
 *      addItem,
 *      removeItem,
 *     clearItem
 *       },
 * reducer,
 * }
 */

//Export 2 things: actions and reducers
export const {addItem,removeItem,clearCart} = cartSlice.actions; //exporting actions of cartSlice, here we are taking them out and then exporting.
export default cartSlice.reducer; //this how we export the reducer of cartSlice
