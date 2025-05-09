import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import CountryDetails from './Components/Home/CountryDetails.jsx';
import About from './Components/About/About.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "/country/:name", element: <CountryDetails></CountryDetails>},
      {path: "about", Component: About},
    ]
  },

  {
    path: "*",
    Component: NotFound
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
