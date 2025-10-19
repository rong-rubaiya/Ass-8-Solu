import React from 'react';
import imgLogo from  '../../assets/logo.png'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className=" sm:footer-horizontal bg-neutral text-neutral-content ">
  <div className='p-10 flex flex-col sm:flex-row justify-between '>
    <aside className='w-1/3'>
   <div className='flex gap-3 items-center pb-3.5 sm:pb-0'><img className='h-10' src={imgLogo} alt="" /><h1 className='font-semibold text-2xl'>AppifyZone</h1></div>
    <p className='hidden md:block'>
     You're exploring trending apps or analyzing performance metrics through visual graphs, AppifyZone delivers a clean, modern, and immersive user experience that blends design and functionality seamlessly.
    </p>
  </aside>
  
   <div className='pb-3.5 sm:pb-0'>
          <h2 className="text-lg font-semibold mb-3 border-b border-white/20 inline-block pb-3.5 sm:pb-1">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gray-200">Home</a></li>
            <li><a href="/apps" className="hover:text-gray-200">Apps</a></li>
            <li><a href="/installation" className="hover:text-gray-200">Installed Apps</a></li>
            
          </ul>
        </div>


  <div className="flex justify-center sm:justify-start gap-5 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
              <FaLinkedinIn size={20} />
            </a>
            <a href="mailto:your-email@example.com" className="hover:scale-110 transition-transform duration-200">
              <MdEmail size={22} />
            </a>
          </div>
  </div>

          <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm opacity-90 pb-7">
        <p>
          <span className="font-semibold">AppifyZone</span>. All rights reserved.  
        </p>
        <p className="mt-1 italic text-gray-200">Crafted with ❤️ by Rubaiya Hamid Rongkoni</p>
      </div>
          


          
 
</footer>

  );
};

export default Footer;