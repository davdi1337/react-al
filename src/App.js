import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Results from './pages/Results'
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import { SearchContext } from './context/search'
import axios from 'axios'

function App() {
  const [animeData, setAnimeData] = useState([])
  const [singleData, setSingleData] = useState({})

  const setData = (data) => {
    setAnimeData(data)
  }

  const setSingle = (data) => {
    setSingleData(data)
  }

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}`
    )
    .then(response => response.json())
  }

  return (
    <div>
      <SearchContext.Provider value={{search, animeData, setData, singleData, setSingle}}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/results" element={<Results/>}/>
        </Routes>
      </BrowserRouter>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
