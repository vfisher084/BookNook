import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BookCatalog from './pages/BookCatalog';
import CommunityCorner from './pages/CommunityCorner';
import ShoppingCart from './pages/ShoppingCart';
import BookDetails from './pages/BookDetails';
import Nopage from './pages/Nopage';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="aboutus" element={<AboutUs />}/>
          <Route path="bookcatalog" element={<BookCatalog />}/>
          <Route path="communitycorner" element={<CommunityCorner />}/>
          <Route path="shoppingcart" element={<ShoppingCart />}/>
          <Route path="bookdetails/:id" element={<BookDetails />}/>
          <Route path="*" element={<Nopage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
