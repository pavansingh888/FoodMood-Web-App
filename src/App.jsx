import './App.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import UserContext from './utils/UserContext'
import {Provider} from "react-redux" //We will need Provider given by react-redux to connect react app to our store.
import appStore from './utils/appStore'

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
       <Header/>    
       <Outlet/>
       <Footer/>
     </div>
    </UserContext.Provider>
    </Provider>
    </>       
  ) 
}
export default App
