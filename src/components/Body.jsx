import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { FETCH_RES_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Error from "./Error";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]); //to store all the restaurants that will be displayed on UI
  const [isFiltered, setIsFiltered] = useState(false); //to store filtered y/n
  const [searchInput, setSearchInput] = useState(""); //to store search input text
  const [fetchedList, setFetchedList] = useState([]); //Used to store restaurant data after API call - (Why can't we use normal JS variable to store restaurant list??) Although we don't want to update this state after first update during API call, so just to keep the fetched restaurant list in next render also - we are using it as state variable instead of normal JS 'let' variable.
  const [error, setError] = useState(false);

  //Using higher order component - Which will give a Restaurant card component wrapped in a div with the discount label.
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  const handleClick = (e) => {
    if (e.nativeEvent.srcElement.firstChild.textContent === "All Restaurants") {
      setrestaurantList([...fetchedList]);
      setSearchInput("")
      setIsFiltered(false);
    } else if (isFiltered) {
      setIsFiltered(false);
      setrestaurantList([...fetchedList]);
    } else {
      setIsFiltered(true);
      setrestaurantList([
        ...fetchedList.filter((data) => data.info.avgRating > 4.5),
      ]);
    }
  };

  const handleSearch = () => {
    if (searchInput) {
      const filteredData = fetchedList.filter((data) =>
        data.info.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setrestaurantList(filteredData);
    }
  };

  useEffect(() => {
    const filteredData = fetchedList.filter((data) =>
      data.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setrestaurantList(filteredData);
  }, [searchInput]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const data = await fetch(FETCH_RES_URL);
      const json = await data.json();
      console.log(json);
      const foundRestaurant = json?.data?.cards[0]?.card?.card?.gridElements
        ?.infoWithStyle.restaurants
        ? json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
            .restaurants
        : json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            .restaurants;
      setFetchedList([...foundRestaurant]);
      setrestaurantList([...foundRestaurant]); //optional chaining
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setError(true);
    }
  };

  const onlineStatus = useOnlineStatus(); //will return the online status of the browser i.e if its connected to internet or not - using event listeners.

  if (onlineStatus === false) {
    return <h1>You're offline, Please check your internet connection.</h1>;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="body bg-gray-200 dark:bg-gray-900 min-h-screen">
      <div className="search-and-filter flex flex-col items-center justify-center pt-4 sm:space-y-0 sm:space-x-4">
        <input
          className="search-input w-[90%] sm:w-[600px] mb-4 mx-4  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="Search restaurant here..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        >
          
        </input>
        <div className="flex flex-wrap justify-center space-x-2 w-[90%]">
          <button
            className="search px-4 py-2 mb-2 ml-2 text-white bg-teal-500 dark:bg-green-600 rounded-md dark:hover:bg-green-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-green-400 "
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="filter-btn px-4 py-2 mb-2  text-white bg-orange-600 rounded-xl hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            onClick={handleClick}
          >
            All Restaurants
          </button>
          <button
            className={`filter-btn px-4 py-2 mb-2 mr-2 text-white bg-orange-600 rounded-xl hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
              isFiltered ? "bg-orange-800" : ""
            }`}
            onClick={handleClick}
          >
            Top Rated Restaurant (4.5+)
          </button>
          
         
        </div>
      </div>
      {searchInput && restaurantList.length === 0 ? (
        <div className="error-container dark:text-white text-black text-center my-5 mx-3 font-sans text-lg h-screen">
          Sorry, we couldn't find any results for "{searchInput}"
        </div>
      ) : (
        ""
      )}

      <div className="res-container grid grid-cols-[repeat(auto-fit,_250px)] gap-7 mx-10 py-8 dark:bg-gray-900 justify-center">
        {fetchedList.length === 0
          ? Array.from({ length: 20 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : restaurantList.map((Info) => (
              <Link
                to={`/restaurant/${Info.info.id}`}
                key={Info.info.id}
                className="res-link"
              >
                {Info?.info?.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardDiscount resInfo={Info} />
                ) : (
                  <RestaurantCard resInfo={Info} />
                )}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
