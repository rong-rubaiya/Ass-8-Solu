import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Roots/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import Error from '../Pages/Error/Error';
import SingleCard from '../Pages/SingleCard/SingleCard';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement:<Error/>,
    children:[
      {
       index: true, 
       path:'/',
        loader: async () => {
          await new Promise(res => setTimeout(res, 1000)); 
          return fetch("/appsCard.json")},
       Component:Home
    },
    {
            path: '/apps',
        loader: async () => {
          await new Promise(res => setTimeout(res, 1000));
          const res = await fetch("/appsdata.json");
          return res.json(); 
        },
        shouldRevalidate: () => true, 
        Component: Apps
    },
    {
      path:'/singlecard/:id',
      loader:()=>fetch('appsdata.json'),
      Component:SingleCard
    },
    {
      path:'/installation',
      Component:Installation
    }
  ]
  }
]);
