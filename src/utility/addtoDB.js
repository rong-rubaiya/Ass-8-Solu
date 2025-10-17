const getStoredApps=()=>{
 const storeApps=localStorage.getItem("InstalledApps");
 if(storeApps){
  const storeAppsData=JSON.parse(storeApps);
  return storeAppsData
 }
 else{
  return [];
 }
}

const addToStoreDB=(id)=>{
const storeAppsData=getStoredApps();
if(storeAppsData.includes(id)){
  alert("You have already installed the apps");
  
}
else{
  storeAppsData.push(id);
  const data=JSON.stringify(storeAppsData);
  localStorage.setItem('InstalledApps',data)
}
}

export {addToStoreDB}