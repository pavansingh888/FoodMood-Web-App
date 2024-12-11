import { useSelector } from "react-redux";

const useTotalCartItems = () => {

    const cart = useSelector((store) => store.cart.items); // Access cart state
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    return totalItems;
}

export default useTotalCartItems;