import React from "react";
import './App.css';
import Home from './Home.jsx'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Create from "./Create.jsx";
import Update from "./Update.jsx";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/update/:id" element={<Update />} />
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
