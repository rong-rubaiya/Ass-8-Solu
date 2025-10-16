import React from 'react';
import Nav from '../../Components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/footer/Footer';

const Root = () => {
  return (
    <div >
      <Nav></Nav>
      <div className='max-w-[1400px] mx-auto'>
        <Outlet></Outlet>
        </div>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;