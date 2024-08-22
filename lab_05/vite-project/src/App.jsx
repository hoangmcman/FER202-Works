import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import News from "./pages/News";
import Contact from "./pages/Contact";


import './App.css'

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/news", element: <News/>},
  {path: "/contact", element: <Contact/>}
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App
