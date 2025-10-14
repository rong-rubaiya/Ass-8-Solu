import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Roots/Root';
import Home from '../Pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[{
       index: true, 
       path:'/',
       Component:Home
    }]
  }
]);
