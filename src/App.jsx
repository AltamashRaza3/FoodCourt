
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Cart from './components/Cart'
import RestrauntMenu from './components/RestrauntMenu'
import Grocery from './components/Grocery'

const AppLayout= ()=>{
  return (
    <div className='app'>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restraunts/:resId",
        element: <RestrauntMenu/>
      },
      {
        path:"/grocery",
        element:<Grocery/>
      }
    ],
    errorElement: <Error />,
  },
]);

function App() {

  return (
    <>
    <RouterProvider router= {router}/>
   </>
  )
}



export default App
