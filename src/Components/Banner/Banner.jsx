import React from 'react';
import playstorLogo from '../../assets/Group.png'
import appLogo from '../../assets/Group (1).png'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='flex flex-col items-center px-3'>
       <h1 className='text-center text-black text-4xl md:text-7xl font-bold'>We Build <br />
         <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>Apps</h1>
         <p className='my-10 text-gray-500 text-center' >At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.< br className='hidden md:block'/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
         
         <div className='flex flex-col md:flex-row gap-4 text-center items-center '>
          <Link to={'https://play.google.com/store/games?hl=en'}>
          <button className='flex px-5 py-2 border-1 border-gray-300 cursor-pointer rounded-md font-semibold gap-1' ><img src={playstorLogo} alt="PlayStore" />Google Play</button></Link>

          <Link to={'https://www.apple.com/app-store/'}><button className='flex px-5 py-2 border-1 border-gray-300 cursor-pointer rounded-md font-semibold gap-1' ><img src={appLogo} alt="PlayStore" />App Store</button></Link>
         </div>


    
    </div>
  );
};

export default Banner;