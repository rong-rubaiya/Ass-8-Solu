import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import downloadLogo from '../../assets/icon-downloads.png'
import RatingLogo from '../../assets/icon-ratings.png'
import ReviwesgLogo from '../../assets/icon-review.png'
  import { ToastContainer, toast } from 'react-toastify';
import { addToStoreDB } from '../../utility/addtoDB';

const SingleCard = () => {
 


  // installed or not 

  const [isInstall,setisInstall]=useState(false);

  

 

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const { id } = useParams();
  const cardId = parseInt(id);
  const data = useLoaderData();


  useEffect(() => {
    const storedApps = localStorage.getItem("InstalledApps");
    if (storedApps) {
      const parsed = JSON.parse(storedApps);
      if (parsed.includes(cardId)) {
        setisInstall(true);
      }
    }
  }, [cardId]);

  const handleBtn = (id) => {
    const storedApps = localStorage.getItem("InstalledApps");
    let parsed = storedApps ? JSON.parse(storedApps) : [];

    if (parsed.includes(id)) {
      toast.info("You have already installed this app");
    } else {
      parsed.push(id);
      localStorage.setItem("InstalledApps", JSON.stringify(parsed));
      toast.success(`Yahooo🥳!! ${title} Installed Successfully👏`);
      setisInstall(true);
    }
  };
  
  
  
  
  
  const cardsArray = Array.isArray(data) ? data : [];
  const singleCardData = cardsArray.find(card => card.id === cardId);
  
  
  
  

  const { image, title, ratingAvg, downloads, description, companyName, size, reviews, ratings, details } = singleCardData;
    
  return (
      <div className=' bg-[#F5F5F5] '>
        {/* Apps Card --1 */}
         <div className='max-w-[1400px] mx-auto my-6 border-b-2 border-gray-300 pb-8 px-7 lg:px-0'>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start gap-8'>
            <img className='h-40 w-40 lg:w-auto lg:h-80 shadow-xl p-8  bg-white' src={image} alt="" />
            <div >
              
              <div className='w-3/4'>
                <h1 className='font-bold text-3xl pb-4'>{title}:{description}</h1>
              <p className='text-gray-500 text-sm'>Devoloped by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>{companyName}</span></p>
              </div>
              <div className='border-b-2 border-gray-300 py-3' ></div>
              <div className='flex flex-col  sm:flex-row   items-center sm:items-start justify-items-center sm:justify-items-start  gap-16 pt-2'>
                 <section className='border-1 border-dashed border-gray-400 sm:border-0 p-4 flex flex-col items-center sm:items-start'>
                  <img src={downloadLogo} alt="" />
                  <p>Downloads</p>
                  <h1 className='font-bold text-4xl'>{downloads}</h1>
                </section>

                  <section className='border-1 border-dashed border-gray-400 sm:border-0 p-4 flex flex-col items-center sm:items-start'>
                  <img src={RatingLogo} alt="" />
                  <p>Average Ratings</p>
                  <h1 className='font-bold text-4xl'>{ratingAvg}</h1>
                </section>

                  <section className='border-1 border-dashed border-gray-400 sm:border-0 p-4 flex flex-col items-center sm:items-start'>
                  <img src={ReviwesgLogo} alt="" />
                  <p>Total Reviews</p>
                  <h1 className='font-bold text-4xl'>{reviews}</h1>
                </section>
              </div>

              {/* Install button */}
              <button
                onClick={() => handleBtn(cardId)}
                disabled={isInstall}
                className={`py-3 px-10 rounded-md text-white ${
                  isInstall ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00b87f]'
                }`}
              >
                {isInstall ? 'Installed' : `Install Now (${size} MB)`}
              </button>
            </div>
           
          </div>
         </div>

         {/* Graph */}
         <div className='max-w-[1400px] mx-auto my-6 border-b-2 border-gray-300 pb-8'>
          <h1>I am graph</h1>
         </div>

         {/* details */}

         <div className='max-w-[1400px] mx-auto my-6 px-7 lg:px-0'>
         <h2 className='py-7 font-bold'>Description:</h2>
         <p>{details}</p>
         </div>

             <ToastContainer
             position="top-center"      // middle horizontally
              autoClose={2000}           // 2 seconds
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover />
      </div>
      

  );
};

export default SingleCard;