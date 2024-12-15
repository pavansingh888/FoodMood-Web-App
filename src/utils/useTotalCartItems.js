import { useSelector } from "react-redux";

const useTotalCartItems = () => {

    const cart = useSelector((store) => store.cart.items); // Access cart state
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item?.card?.info?.price/100 ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100)*item.quantity, 0);
    
    return [totalItems, totalPrice];
}

export default useTotalCartItems;