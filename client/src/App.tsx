import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from './components/home/Home';
import { NewsFeed } from './views/NewsFeed';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<NewsFeed />} />
        {/* <Route path="/recipes/:id" element={<RecipeDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
