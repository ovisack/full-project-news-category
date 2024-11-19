import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center'>
           <h2 className='bg-red-500 text-white'>Latest </h2> 
         <Marquee pauseOnHover={true} speed={100}>
            <Link to='/news'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus corrupti aliquid et nulla necessitatibus ipsam cumque non, reprehenderit,
            </Link>
            <Link to='/news'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus corrupti aliquid et nulla necessitatibus ipsam cumque non, reprehenderit,
            </Link>
            <Link to='/news'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus corrupti aliquid et nulla necessitatibus ipsam cumque non, reprehenderit,
            </Link>
            <Link to='/news'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus corrupti aliquid et nulla necessitatibus ipsam cumque non, reprehenderit,
            </Link>
            <Link to='/news'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus corrupti aliquid et nulla necessitatibus ipsam cumque non, reprehenderit,
            </Link>
         </Marquee>
        </div>
    );
};

export default LatestNews;