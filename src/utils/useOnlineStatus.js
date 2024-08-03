import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if online
    const handleOnline = (e) => {
        if(e.type === "offline"){
             setOnlineStatus(false)
        } else if(e.type === "online") {
            setOnlineStatus(true)
        }
    }

    useEffect(() => {
        window.addEventListener("offline", handleOnline )
        window.addEventListener("online", handleOnline )

    //  Cleaning cache - CleanUp function returned by useEffect, called when we go out of the component i.e just before Unmounting the component.   
     return () => {
        window.removeEventListener("offline",handleOnline )
        window.removeEventListener("online", handleOnline )
     }
    },[])
     
    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;