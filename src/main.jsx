import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from './App.jsx'
import Details from './routes/Details.jsx'
import { MovieList } from './routes/Movielist.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'


import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieList /> // aqui vai o componente principal
  },
  {
    path: "movie/:movieId",
    element: <Details /> // aqui vai o componente com detalhes do filme
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>,
)
