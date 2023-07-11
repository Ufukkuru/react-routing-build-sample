import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Detail() {
  return (
    <>
    <div>Detail</div>
        <nav>
            <Link to={'user'}>User</Link>|||||||||||
            <Link to={'product'}>Product</Link>
        </nav>
        <Outlet/>
    </>
  )
}

export default Detail