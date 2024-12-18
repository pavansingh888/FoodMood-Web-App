import React, { useEffect, useState } from 'react'
import UserContext from './utils/UserContext'
import {Provider} from "react-redux" //We will need Provider given by react-redux to connect react app to our store.
import appStore from './utils/appStore'
import AppComponent from './components/AppComponent'

function App() {
  const [userName, setUserName] = useState('');

  //authentication
  useEffect(()=>{
   //API call and send username & password
   const data = {
    name: "MS Dhoni"
   }
   setUserName(data.name) 
  },[])



  return (
    <>
    <Provider store={appStore}>
     <UserContext.Provider value={{loggedInUser:userName, setUserName}}> 
     <div className='app flex flex-col min-h-screen'>
       <AppComponent/>
     </div>
    </UserContext.Provider>
    </Provider>
    </>       
  ) 
}
export default App
