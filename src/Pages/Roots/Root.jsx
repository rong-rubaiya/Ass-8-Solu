import React from 'react';
import Nav from '../../Components/Nav/Nav';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/footer/Footer';
import Loader from '../../Components/Loader/Loader';

const Root = () => {
  const navigation= useNavigation();
  const isNavigating= Boolean(navigation.location)
  return (
    <div >
      <Nav></Nav>
      {isNavigating && <Loader></Loader>}
        <Outlet></Outlet>
       
      <Footer></Footer>
      
    </div>
  );
};

export default Root;