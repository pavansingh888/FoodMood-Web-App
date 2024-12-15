import { useEffect, useState } from 'react'
import { FETCH_RESMENU_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { updateCurrentRestaurantInfo, clearCurrentRestaurantInfo } from './cartSlice';

//Using Custom hook to fetch Res-Menu data
const useRestaurantMenu = (resId) => {
    
    const dispatch = useDispatch();
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchMenu();

        return () => {
            clearMenu();
        }
    },[])

    const fetchMenu = async () => {
        const data = await fetch(FETCH_RESMENU_URL+resId)
        const json = await data.json()
        dispatch(updateCurrentRestaurantInfo({currentRestaurantInfo:json?.data?.cards[2]?.card?.card?.info}));
        setResMenu(json?.data);
    }

    const clearMenu = () => {
        dispatch(clearCurrentRestaurantInfo());
    }

    return resMenu;
}

export default useRestaurantMenu

