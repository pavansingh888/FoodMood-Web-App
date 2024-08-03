import RestaurantCard, {withDiscountLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { FETCH_RES_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  
  const [restaurantList, setrestaurantList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [fetchedList,setFetchedList] = useState([]);
  
  // console.log(restaurantList);
  //Using higher order component
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  const {loggedInUser, setUserName} = useContext(UserContext)

  const handleClick = (e)=>{
    if(e.nativeEvent.srcElement.firstChild.textContent==="All"){
      setrestaurantList([...fetchedList]);
      setIsFiltered(false);
    }else if(isFiltered){
      setIsFiltered(false);
      setrestaurantList([...fetchedList]);
    }else{
      setIsFiltered(true);
      setrestaurantList([...fetchedList.filter((data)=>data.info.avgRating>4.2 )])
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }; 

  const handleSearch = () => {
    if(searchInput){
      const filteredData = fetchedList.filter((data)=> data.info.name.toLowerCase().includes(searchInput.toLowerCase()))
      setrestaurantList(filteredData);
      setSearchInput("");
    }
  }

  useEffect(() => {
    // Attach keydown event listener
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchInput]);

  useEffect(() => {
    fetchRestaurant(); 
 },[]) 

  const fetchRestaurant = async () => {
    const data = await fetch(FETCH_RES_URL);
    const json = await data.json();
    setFetchedList([...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
    setrestaurantList([...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants]) //optional chaining
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return (<h1>You're offline, Please check your internet connection.</h1>)
  }

    return (<div className="body bg-gray-200 dark:bg-gray-900">
      <div className="search-and-filter flex flex-col sm:flex-row items-center justify-center py-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          className="search-input w-full sm:w-auto mb-4 sm:mb-0 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="Search restaurant here..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="flex flex-wrap justify-center space-x-2">
          <button
            className="search px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="filter-btn px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            onClick={handleClick}
          >
            All
          </button>
          <button
            className={`filter-btn px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${isFiltered ? 'bg-orange-800' : ''}`}
            onClick={handleClick}
          >
            Top Rated Restaurant (4.2+)
          </button>
          <label className="text-white">Username: </label>
          <input
          className="search-input w-full sm:w-auto mb-4 sm:mb-0 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="Provide username here..."
          value={loggedInUser}
          onChange={(e)=> setUserName(e.target.value)}
        />
        </div>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8 dark:bg-gray-900">
        {restaurantList.length === 0
          ? Array.from({ length: 10 }).map((_, index) => <ShimmerCard key={index} />)
          : restaurantList.map((Info) => (
              <Link to={`/restaurant/${Info.info.id}`} key={Info.info.id} className="res-link">
                {Info?.info?.aggregatedDiscountInfoV3 ? <RestaurantCardDiscount resInfo={Info} /> : <RestaurantCard resInfo={Info} /> }
              </Link>
            ))}   
      </div>
    </div>
      
    )
  }

  export default Body;