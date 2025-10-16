import React, { Suspense, useState } from 'react';
import CardHome from './CardHome';

const Card = ({data}) => {
  const [Card,setCard]=useState([])
  return (
    <div>
      <div className='flex flex-col justify-center text-center my-9'>
        <h1 className='text-2xl md:text-4xl  font-semibold mb-4'>Trending Apps</h1>
        <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
      </div>
     <Suspense fallback={<span className="loading loading-bars loading-xl text-center"></span>}>
       <div className='w-auto md:w-[1400px] mx-auto grid-cols-1 sm:grid grid-cols-2 md:grid-cols-4 gap-4'>
        {
          data.map((Card)=><CardHome key={Card.id} Card={Card}></CardHome>)
        }
      </div>
     </Suspense>

    <div className='flex justify-center mt-10'>
       <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white bold rounded-md px-10 py-2 cursor-pointer'>Show All</button> 
    </div>
    </div>
  );
};

export default Card;