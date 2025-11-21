import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingPlants from './components/TrendingPlants';
import TopSellingPlants from './components/TopSellingPlants';
import CustomerReviews from './components/CustomerReviews';
import O2Plants from './components/O2Plants';
import Footer from './components/Footer';
import More from './components/More'
import Contact from "./components/Footer"
function App() {
  return (
    <div className="App min-h-screen bg-[#0a1f0f]">
      <Navbar />
         <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/trendy" element={<TrendingPlants/>} />
        <Route path="/topselling" element={<TopSellingPlants/>} />
        <Route path="/o2plants" element={<O2Plants/>} />
        <Route path="/more" element={<More/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <main>
     
        <TrendingPlants />
        <TopSellingPlants />
        <CustomerReviews />
        <O2Plants />
      </main>
      <Footer />
    </div>
  );
}

export default App;
