import React ,{lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Error from './components/Error'
import About from './components/About'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import ShimmerCard from './components/ShimmerCard.jsx'
import Cart from './components/Cart.jsx'
import Login from './components/Login.jsx'
// import Instamart from './components/Instamart.jsx' //Instead of this we do lazy loading/ On Demad loading

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
      },
      // {
      //   path: '/contact',
      //   element: <Contact/>,
      // },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Suspense fallback={<h1>Loading...</h1>}><Contact/></Suspense>,
      },
      {
        path:'/restaurant/:resId', //resId is dynamic and can be changed according to the id of the restuarant
        element: <RestaurantMenu/>
      },
      {
        path:'/cart', //resId is dynamic and can be changed according to the id of the restuarant
        element: <Cart/>
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
