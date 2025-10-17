import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import downloadLogo from '../../assets/icon-downloads.png'
import RatingLogo from '../../assets/icon-ratings.png'
import ReviwesgLogo from '../../assets/icon-review.png'

const SingleCard = () => {
  const { id } = useParams();
  const cardId = parseInt(id);
  const data = useLoaderData();
  
  
  console.log('Data:', data);
  console.log('Looking for ID:', cardId);
  
  // Make sure data is an array and find the card by "id" (not cardId)
  const cardsArray = Array.isArray(data) ? data : [];
  const singleCardData = cardsArray.find(card => card.id === cardId);
  
  console.log('Found card:', singleCardData);
  
  if (!singleCardData) {
    return <div>Card not found!</div>;
  }

  const { image, title, ratingAvg, downloads, description, companyName, size, reviews, ratings, details } = singleCardData;
    
  return (
      <div className=' bg-[#F5F5F5] '>
        {/* Apps Card --1 */}
         <div className='max-w-[1400px] mx-auto my-6 border-b-2 border-gray-300 pb-8 px-7 lg:px-0'>
          <div className='flex flex-col sm:flex-row  justify-center items-center  gap-8'>
            <img className='h-40 w-40 lg:w-auto lg:h-80 shadow-xl p-8  bg-white' src={image} alt="" />
            <div >
              
              <div className='w-3/4'>
                <h1 className='font-bold text-3xl pb-4'>{title}:{description}</h1>
              <p className='text-gray-500'>Devoloped by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>{companyName}</span></p>
              </div>
              <div className='border-b-2 border-gray-300 py-3' ></div>
              <div className='flex flex-col  sm:flex-row justify-center items-center  gap-16 pt-2'>
                <section>
                  <img src={downloadLogo} alt="" />
                  <p>Downloads</p>
                  <h1 className='font-bold text-4xl'>{downloads}</h1>
                </section>

                 <section>
                  <img src={RatingLogo} alt="" />
                  <p>Average Ratings</p>
                  <h1 className='font-bold text-4xl'>{ratingAvg}</h1>
                </section>

                 <section>
                  <img src={ReviwesgLogo} alt="" />
                  <p>Total Reviews</p>
                  <h1 className='font-bold text-4xl'>{reviews}</h1>
                </section>
              </div>
            </div>
           
          </div>
         </div>

         {/* Graph */}
         <div className='max-w-[1400px] mx-auto my-6 border-b-2 border-gray-300 pb-8'>
          <h1>I am graph</h1>
         </div>

         {/* details */}

         <div className='max-w-[1400px] mx-auto my-6'>
         <h2 className='py-7 font-bold'>Description:</h2>
         <p>{details}</p>
         </div>
      </div>

  );
};

export default SingleCard;