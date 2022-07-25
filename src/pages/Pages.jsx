import React from 'react'
import Home from './Home'
import Header from '../components/Home-Components/Header';
import {
    Route,
    Routes,
    BrowserRouter
  } from "react-router-dom";

import SearchedItems from '../components/SearchedItems';
import Item from '../components/Item';
import Catalog from './Catalog';
import AboutPage from './AboutPage';

function Pages() {
  return (

    <BrowserRouter>
        <Header />
      <Routes>
            <Route  exact path="/" element={  <Home /> } />
            <Route  exact path="/:about" element={  <AboutPage /> } />
            <Route   path="/catalog" element={ <Catalog /> } />
            <Route path='/searched/:search' element={<SearchedItems />} />
            <Route path='product/:title' element={<Item />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages