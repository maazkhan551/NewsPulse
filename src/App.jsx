import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  let apiKey = import.meta.env.VITE_NEWS_API;
  const [progress,setProgress] = useState(0)
   
    return (
       <div>
        <Router>
        <Navbar/>
         <LoadingBar
        color="#f11946"
        progress={ progress}
      />
      <Routes>
        <Route exact path="/" element={<News   setProgress =  {setProgress} apiKey = {apiKey}key="general" pageSize = {5} category = "general"/>} />
        <Route exact path="/business" element={<News   setProgress =  {setProgress} apiKey = {apiKey}key="business" pageSize = {5} category = "business"/>} />
        <Route exact path="/entertainment" element={<News setProgress=  {setProgress}key="entertainment" pageSize = {5} category = "entertainment"/>} />
        <Route exact path="/general" element={<News setProgress=  {setProgress} apiKey = {apiKey} key="general" pageSize = {5} category = "general"/>} />
        <Route exact path="/health" element={<News setProgress=  {setProgress} apiKey = {apiKey} key="health" pageSize = {5} category = "health"/>} />
        <Route exact path="/science" element={<News setProgress=  {setProgress} apiKey = {apiKey} key="science" pageSize = {5} category = "science"/>} />
        <Route exact path="/sports" element={<News setProgress=  {setProgress} apiKey = {apiKey} key="sports" pageSize = {5} category = "sports"/>} />
        <Route exact path="/technology" element={<News setProgress=  {setProgress} apiKey = {apiKey} key="technology" pageSize = {5} category = "technology"/>} />
      </Routes>
        </Router>
       </div>
    )
}

export default App