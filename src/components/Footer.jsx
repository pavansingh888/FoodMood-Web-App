import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = ()=>{
    const currentyear= new Date().getFullYear();


    return (
        <footer className='bg-teal-500 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-6'>
            <div className='container mx-auto px-4 text-center' >
                <p className='text-sm sm:text-base flex items-center justify-center'>
                    Created by 
                    &nbsp;
                    <HeartIcon 
                     className=" w-5 text-red-800 dark:text-red-500 transition-colors duration-300"/>
                    <a 
                    className='text-gray-900 hover:text-red-900 dark:text-gray-300 dark:hover:text-orange-500 font-semibold'
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
                   <a 
                   href='https://'
                   target='_blank'
                   rel='noreferrer noopener'
                   >
                    <strong> 
                        &nbsp; Food<span className='text-red-500 dark:text-orange-500'>Mood</span>
                    </strong>
                    </a> 
                     . All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;