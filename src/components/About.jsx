import React, { useEffect } from "react";
import burgerFoodImage from "../assets/images/burgerFoodImage.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container-main w-full min-h-[84vh] bg-gray-100 dark:bg-gray-900 p-6 h-screen flex">
      <div className="about-container dark:bg-gray-900 my-auto mx-[25px]  flex  flex-col min-[792px]:flex-row justify-evenly items-center self-center">
        {/* Left Section */}
        <div className="about-left flex flex-wrap flex-col justify-start items-start overflow-y-hidden font-sans max-[880px]:mb-[20px] ">
          <h1 className="leading-tight text-7xl dark:text-white max-[320px]:text-[22px] max-[350px]:text-[25px] max-[470px]:text-[35px] max-[950px]:text-[45px] max-[1150px]:text-[50px]">
            Welcome to
            <br />
            The world of
            <br />
            <span className="bg-orange-500 px-[10px] mt-2 rounded-2xl">
              Fresh & Delicious Food
            </span>
          </h1>
          <h4 className="italic text-[25px] mt-[10px] dark:text-white max-[320px]:text-[8px] max-[350px]:text-[10px] max-[470px]:text-[12px] max-[950px]:text-[18px] max-[1150px]:text-[20px]   ">
            "Food<span className="text-red-500 dark:text-orange-500">Mood</span>{" "}
            - Good Food, Good Mood!"
          </h4>
        </div>

        {/* Right Section - Image */}
        <div className="about-right  flex flex-wrap flex-col justify-center items-center overflow-y-hidden">
          <img
            src={burgerFoodImage}
            alt="Delicious Burger"
            className="w-[500px] max-[320px]:w-[170px] max-[350px]:w-[220px] max-[470px]:w-[250px] max-[650px]:w-[300px] max-[950px]:w-[330px] max-[1150px]:w-[380px] h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
