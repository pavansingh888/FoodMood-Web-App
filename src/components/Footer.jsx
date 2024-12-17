import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
const Footer = ()=>{
    const currentyear= new Date().getFullYear();


    return (
        <footer className='bg-teal-500 dark:bg-gray-800 text-white dark:text-gray-200 py-6 max-[320px]:py-[15px] max-[320px]:px-[10px]'>
            <div className='container mx-auto text-center' >
                <p className='text-base flex items-center justify-center'>
                    Created by 
                    &nbsp;
                    <HeartIcon 
                     className=" w-5 text-red-500 dark:text-red-500 transition-colors duration-300"/>
                    <a 
                    className='text-red-500 hover:text-red-900 dark:text-gray-300 dark:hover:text-orange-500 font-semibold'
                    href='https://www.linkedin.com/in/-pavansingh'
                    target='_blank'
                    rel='noreferrer noopener'
                    >
                       &nbsp; Pavan Singh
                    </a>
                </p>
                <p>
                   <FontAwesomeIcon icon={faCopyright} className="h-4 w-4 mr-2" /> 
                   {currentyear} 
                   <Link 
                   to='/'
                   onClick={()=>{
                    window.scrollTo({top:0, behavior:'smooth'})
                   }}
                   >
                    <strong> 
                        &nbsp; Food<span className='text-red-500 dark:text-orange-500'>Mood</span>
                    </strong>
                    </Link> 
                     . All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;