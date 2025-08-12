
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

const AppLayout= ()=>{
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

const router= createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path: "/contactus",
    element: <Contact/>
  }
])

function App() {

  return (
    <>
    <RouterProvider router= {router}/>
   </>
  )
}



export default App
