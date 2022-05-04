import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import '../App.css'
function Home() {
  return (
      <>
        <Navbar />
        <div className="home">
            <h1>This is Home Page</h1>
            <Link to="/products">Products</Link>
        </div>
      </>
  )
}

export default Home