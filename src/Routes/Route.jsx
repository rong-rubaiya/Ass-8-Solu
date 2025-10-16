import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Roots/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import Error from '../Pages/Error/Error';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement:<Error/>,
    children:[
      {
       index: true, 
       path:'/',
       loader:()=>fetch('appsCard.json'),
       Component:Home
    },
    {
      path:'/apps',
      Component:Apps
    },
    {
      path:'/installation',
      Component:Installation
    }
  ]
  }
]);
