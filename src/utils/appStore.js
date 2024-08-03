//this file is for our store
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice" //importing reducer of cartSlice, which we default exported.

//To create Store we use configureStore() provided by RTK
const appStore = configureStore({
//We will add Slices to our store here.. By providing reducer of cartSlice to the main reducer object of our store.
//Basically to modify a Store, it also have a reducer of itself, and this reducer combines the reducers of its slices. 
       reducer:{
        cart: cartReducer,
        // user: userReducer,
       }
});

export default appStore;