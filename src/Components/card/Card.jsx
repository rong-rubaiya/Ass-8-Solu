import React, { Suspense, useState } from 'react';
import CardHome from './CardHome';
import { Link, Links } from 'react-router-dom';

const Card = ({data}) => {
  const [Card,setCard]=useState([])
  return (
    <div>
      <div className='flex flex-col justify-center text-center my-9'>
        <h1 className='text-2xl md:text-4xl  font-semibold mb-4'>Trending Apps</h1>
        <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
      </div>
     <Suspense fallback={<span className="loading loading-bars loading-xl text-center"></span>}>
       <div className='w-auto md:max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 border-t-1 sm:border-t-0'>
        {
          data.map((Card)=><CardHome key={Card.id} Card={Card}></CardHome>)
        }
      </div>
     </Suspense>

    <div className='flex justify-center mt-10'>
      <Link to={'/apps'}>
       <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white bold rounded-md px-10 py-2 cursor-pointer hover:scale-110 transition ease-in-out'>Show All</button> 
      </Link>
    </div>
    </div>
  );
};

export default Card;