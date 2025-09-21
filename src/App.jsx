import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestrauntMenu from "./components/RestrauntMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ScrollToTop from "./utils/scrollTop";

// Lazy loading....
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  // Authentication 
  useEffect(()=>{
    // Make an API call and send username and Password
    const data ={
      name: "Altamash Raza",
    };
    setUserName(data.name);
  },[])


  return (
    <Provider store= {appStore}>
    <UserContext.Provider value={{loggedInUser: userName}}>
    <Toaster position= "top-right" reverseOrder={false}/>
    <ScrollToTop/>
    <div className="app flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

// basename should be passed as the second argument (options) to createBrowserRouter
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
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
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restraunts/:resId",
          element: <RestrauntMenu />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Grocery />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: "/FoodCourt",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
