import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div><h2><Link to='/about'>About</Link>||||<Link to='/contact'>Contact</Link>||||<Link to='/detail'>Detail</Link></h2></div>
  )
}

export default Home