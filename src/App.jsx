import React, { useEffect, useState } from "react";

import './App.css'

function App() {
 /* const [add,setAdd] = useState('')
  // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(pos=>{
          const {latitude,longitude} = pos.coords;
          console.log(latitude,longitude)
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          fetch(url).then(res=>res.json()).then(data=>setAdd(data.address))
      })
  },[])
  console.log(add,"test")*/

 /* const [currLoc, setCurrLoc] = useState();
  useEffect(()=>{
    getLocation()
  },[]);

   const getLocation = async() =>{
      const location = await axios.fetch('https://api.ipify.org/');
      setCurrLoc(location.data);
      console.log(currLoc);
  }*/

      const [ipAddress, setIpAddress] = useState("");
      const [currLoc, setCurrLoc] = useState({}); 

    
      useEffect(()=>{
        getVisitorIp()
      },[]);

      async function getVisitorIp(){
        try{
          const response = await fetch("https://api.ipify.org");
          const data = await response.text();
          setIpAddress(data);
          console.log(data);;
        }
        catch(error){
            console.log("Failed to fetch ip", error);
        }
      }


  return (
    <>
      <div className="app">
          Loading...
      </div>
    </>
  )
}

export default App
