import React from 'react';
import burgerFoodImage from '../assets/images/burgerFoodImage.png'

const About = () => {

    return (
    <div className='about-container-main w-full flex-grow bg-gray-200 dark:bg-gray-900'>
        {/* <div className='about-profile-container'></div> */}
        <div className='about-container max-w-7xl py-6 mt-[50px] mb-[10px] mx-auto flex justify-evenly flex-wrap items-center bg-gray-200 dark:bg-inherit'>
            <div className='about-left w-full max-w-[600px] max-h-96 py-8 px-4  bg-inherit'>
                <h1 className='text-6xl font-semibold font-sans py-2'>
                    Welcome to 
                    <br></br> 
                    The spectrum of 
                    <br></br> 
                    <span>Fresh and Delicious Food</span> 
                </h1>
                <h4 className='italic text-2xl font-semibold'>"FoodMood - Good Food, Good Mood!"</h4>
            </div>
            <div className='about-right w-full max-w-[500px] max-h-96 object-cover bg-inherit'>
                <img src={burgerFoodImage}></img>
            </div>
        </div>
    </div>
    )
}

export default About

 