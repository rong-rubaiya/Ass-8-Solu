import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/card/Card';
import { useLoaderData} from 'react-router-dom';

const Home = () => {
  const data=useLoaderData();
  console.log(data);
  return (
    <div className='bg-[#FAFAFA] py-20 w-full '>
     <Banner></Banner>
     <Card data={data}></Card>
     
    </div>
  );
};

export default Home;