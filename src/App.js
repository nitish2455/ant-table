import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div>
<Navbar/>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        
      </Routes>
    </Router>
    </div>
  );
};

export default App;
