import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/fi_1828884.png'
import { useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';

const Installation = () => {
const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [sortOrder,setsortOrder]=useState('High-Low')

   const [installed,setinstalled]=useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    
    const timer = setTimeout(() => {
      const SavedAppsData = localStorage.getItem("InstalledApps");
      if (SavedAppsData) setinstalled(JSON.parse(SavedAppsData));
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
   if (loading) {
    return <Loader/>;
  }

   if (installed.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl text-center px-2 text-gray-500 font-semibold">
          No Installed Apps Found 😢
        </h2>
      </div>
    );
  }

  const handleUninstall=(id)=>{
     const appToRemove = installed.find(app => app.id === id);
    const updatedApps = installed.filter(app => app.id !== id);
  localStorage.setItem("InstalledApps", JSON.stringify(updatedApps));
  setinstalled(updatedApps);
  toast(`${appToRemove.title} uninstalled from your device`)
  }
  
  return (
   
    <div className='max-w-[1400px] mx-7 lg:mx-auto my-10 min-h-max'>
      <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-2'>
        <h1 className='text-2xl font-semibold'>{installed.length} Apps Found</h1>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 w-30">Sort ⬇️</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 text-center p-2 shadow-sm ">
            <li><a>🔽 High to Low</a></li>
            <li><a>🔼 Low to High</a></li>
          </ul>
        </div>
      </div>
      {
        installed.map(app=>
          <div key={app.id} className="card  bg-base-100  shadow-sm mb-7 ">
     <div className=" flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-start py-6 px-3.5 ">

    <div className='flex items-center flex-col sm:flex-row gap-5'>
      <div className=''>
        <img className='w-20 '  src={app.image} alt="App Photo" />
      </div>
      <div>
        <h1 className='font-bold pb-3'>{app.title}: {app.description}</h1>
        <div className='flex justify-center sm:justify-start items-center gap-2.5'>
          <section className='flex gap-1.5 items-center'>
            <img className='w-6 h-5' src={downloadImg} alt="d" />
            <p>{app.downloads}</p>
          </section>

          <section className='flex gap-1.5 items-center'>
            <img className='w-5 h-5' src={ratingImg} alt="d" />
            <p>{app.ratingAvg}</p>
          </section>

          <section>
            <p>{app.size}MB</p>
          </section>
        </div>
      </div>
    </div>
     
     <button  onClick={() => handleUninstall(app.id)}  className="btn text-white bg-[#00D390] mt-3 sm:mt-0">Uninstall</button>
    
  </div>
  
</div>
        )
      }

              <ToastContainer
              position="top-center"     
              autoClose={2000}          
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover/>
    </div>
  );
};

export default Installation;