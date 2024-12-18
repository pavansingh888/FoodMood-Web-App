import React ,{lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Error from './components/Error'
import About from './components/About'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Cart from './components/Cart.jsx'
import Login from './components/Login.jsx'
// import Contact from './components/Contact.jsx' //Instead of this we do lazy loading/ On Demad loading
const Contact = lazy(() => {return import('./components/Contact')})

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <Error/>,   
    children:[
      {
        path:'/',
        element:<Body/>,
        errorElement: <Error/>,   
      },
      {
        path: '/about',
        element: <About/>,
        errorElement: <Error/>,   
      },
      {
        path: '/contact',
        element: <Suspense fallback={<h1>Loading...</h1>}><Contact/></Suspense>,
        errorElement: <Error/>,   
      },
      {
        path:'/restaurant/:resId', //resId is dynamic and can be changed according to the id of the restuarant
        element: <RestaurantMenu/>,
        errorElement: <Error/>,   
      },
      {
        path:'/cart', //resId is dynamic and can be changed according to the id of the restuarant
        element: <Cart/>,
        errorElement: <Error/>,   
      },
      

    ]
  },
  {
    path: '/login',
    element: <Login />, // This renders only the Login page without the App layout
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
