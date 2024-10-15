import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import "./index.css";
import AboutPage from './landing_page/about/AboutPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
