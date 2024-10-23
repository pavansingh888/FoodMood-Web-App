import RestaurantCard, {withDiscountLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { FETCH_RES_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  
  const [restaurantList, setrestaurantList] = useState([]); //to store all the restaurants that will be displayed on UI
  const [isFiltered, setIsFiltered] = useState(false); //to store filtered y/n
  const [searchInput, setSearchInput] = useState(""); //to store search input text
  const [fetchedList,setFetchedList] = useState([]); //Used to store restaurant data after API call - (Why can't we use normal JS variable to store restaurant list??) Although we don't want to update this state after first update during API call, so just to keep the fetched restaurant list in next render also - we are using it as state variable instead of normal JS 'let' variable.
 
  
  //Using higher order component - Which will give a Restaurant card component wrapped in a div with the discount label.
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

  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     handleSearch();
  //   }
  // }; 

  const handleSearch = () => {
    // console.log(fetchedList);
    if(searchInput){
      const filteredData = fetchedList.filter((data)=> data.info.name.toLowerCase().includes(searchInput.toLowerCase()))
      setrestaurantList(filteredData);
      // setSearchInput("");
    }
  }

  useEffect(() => {
    const filteredData = fetchedList.filter((data)=> data.info.name.toLowerCase().includes(searchInput.toLowerCase()))
    setrestaurantList(filteredData);
    // // Attach keydown event listener
    // window.addEventListener('keydown', handleKeyDown);
    // return () => {
    //   // Cleanup event listener on component unmount
    //   window.removeEventListener('keydown', handleKeyDown);
    // };
  }, [searchInput]);

  useEffect(() => {
    fetchRestaurant(); 
 },[]) 

  const fetchRestaurant = async () => {
    const data = await fetch(FETCH_RES_URL);
    const json = await data.json();
    console.log(json);
    setFetchedList([...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
    setrestaurantList([...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]) //optional chaining
  }

  const onlineStatus = useOnlineStatus(); //will return the online status of the browser i.e if its connected to internet or not - using event listeners.

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
      {searchInput && restaurantList.length === 0 ? <div className="error-container text-white text-center my-5 mx-3 font-sans text-lg ">Sorry, we couldn't find any results for "{searchInput}"</div> : ""}
      
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 my-4 mx-20 dark:bg-gray-900">
        {fetchedList.length === 0
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