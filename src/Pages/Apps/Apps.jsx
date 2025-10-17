import React, { Suspense, useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import AppsCard from '../../Components/appsCard/AppsCard';

const Apps = () => {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const data =useLoaderData();
  const [Cards,setCard]=useState([])
  // console.log(data);
  return (
    <div className='bg-[#FAFAFA] mb-10'>

      <div className='pt-[85px] w-full lg:w-auto flex flex-col justify-center text-center px-5 md:px-0'>
        <h1 className='text-3xl md:text-5xl font-bold '>Our All Applications</h1>
        <p className='pt-5 pb-10 text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className=' max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-center items-center sm:justify-between mb-12 px-5 md:px-7 lg:px-0'>
        <span className='font-semibold pb-3 sm:pb-0'>({data.length}) Apps Found</span>

        {/* Search input */}
        
       <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-auto md:w-64 bg-white shadow-sm">
      <FiSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="search Apps"
        className="outline-none w-full text-sm text-gray-700"
      />
     </div>

      </div>

      {/* card data */}


     <Suspense fallback={<span className="loading loading-bars loading-xl text-center"></span>}>
       <div className='w-auto md:max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 border-t-1 sm:border-t-0 '>
        {
          data.map((Cards)=><AppsCard key={Cards.id} Card={Cards}></AppsCard>)
        }
      </div>
     </Suspense>
      
    </div>
  );
};

export default Apps;