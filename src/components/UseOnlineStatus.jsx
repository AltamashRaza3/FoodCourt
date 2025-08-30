import { useEffect, useState } from "react";

const UseOnlineStatus = () =>{
  const [onlineStatus,setOnlineStatus] = useState(true);
  useEffect(()=>{
    window.addEventListener("offline",() => {
      setOnlineStatus(false);
    })
  },[])

  return  onlineStatus;
  
}
export default UseOnlineStatus;