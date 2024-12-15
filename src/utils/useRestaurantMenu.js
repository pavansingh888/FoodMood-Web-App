import { useEffect, useState } from 'react'
import { FETCH_RESMENU_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
//Using Custom hook to fetch Res-Menu data
const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null)


    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(FETCH_RESMENU_URL+resId)
        const json = await data.json()
        setResMenu(json.data)         
    }
                                                                                                                                      
    return resMenu;
}

export default useRestaurantMenu

