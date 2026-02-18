Home.jsx
import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
      <h3>Hi , click here to go to the page: post.jsx
         <Link to="/post">Go</Link></h3>
    </div>
  )
}

export default Home

Post.jsx
import React from 'react'

function post() {
  return (
    <div>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore quidem labore assumenda voluptas, expedita nesciunt magnam, 
        voluptatibus repudiandae sint accusantium magni excepturi omnis temporibus neque ut. Quam, ab quidem!</p>
    </div>
  )
}

export default post

Main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Post from "./post"
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/post' element={<Post />}></Route>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
