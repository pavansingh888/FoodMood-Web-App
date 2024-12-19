import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resInfo } = props;
  // console.log(resInfo);
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resInfo?.info;

  return (
    <div className="card p-4 bg-gray-100 shadow-lg rounded-lg transition-transform transform hover:scale-105 dark:bg-gray-800  overflow-hidden w-full sm:w-[250px] h-[280px]  max-w-xs ">
      <img
        className="res-logo max-h-[120px] object-fit rounded-t-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="mt-2 text-gray-900 dark:text-white text-2xl sm:text-2xl truncate">
        {name}
      </h2>
      <div className="mt-1">
        <h4 className="text-base text-gray-700 dark:text-gray-300 sm:text-base truncate">
          {cuisines.join(", ")}
        </h4>
      </div>
      <h4 className="mt-2 flex items-center text-orange-600 dark:text-orange-400 text-base sm:text-base">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
            stroke="currentColor"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          &nbsp;{avgRating} • {sla.slaString}
        </div>
      </h4>
      <h4 className="mt-2 text-orange-600 dark:text-orange-400 text-base sm:text-base">
        {costForTwo}
      </h4>
      {/* <h4 className="mt-1 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{sla.slaString}</h4> */}
      {/* <h4 className="mt-1 text-gray-700 dark:text-gray-300 text-sm sm:text-base">User: {loggedInUser}</h4> */}
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  //returning a enhanced component with Discount detail
  return (props) => {
    const labelData = props.resInfo.info.aggregatedDiscountInfoV3;

    return (
      <div className="max-w-[280px] mx-auto ">
        <div className="relative">
          {/* Show discount label if discount information is available */}
          {labelData && (
            <div className="absolute top-2 left-3 text-white bg-green-600 text-xs font-semibold rounded-md shadow-[2px_2px_10px_gray] z-10 px-2 py-1 ">
              {`${labelData.discountTag ? labelData.discountTag : ""} ${
                labelData.header ? labelData.header : ""
              } ${labelData.subHeader ? labelData.subHeader : ""}`}
            </div>
          )}
          {/* Render the WrappedComponent (RestaurantCard) */}
          <RestaurantCard {...props} />
        </div>
      </div>
    );
  };
};

export default RestaurantCard;
