import React ,{lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Error from './components/Error'
import Contact from './components/Contact'
import About from './components/About'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import ShimmerCard from './components/ShimmerCard.jsx'
import Cart from './components/Cart.jsx'
// import Instamart from './components/Instamart.jsx' //Instead of this we do lazy loading/ On Demad loading

const Instamart = lazy(() => {return import('./components/Instamart.jsx')})

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
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/instamart',
        element: <Suspense fallback={<h1>Loading...</h1>}><Instamart/></Suspense>,
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
  }  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
