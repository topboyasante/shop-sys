import React from 'react'
import Badge from '@mui/material/Badge';
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cart = useSelector((state)=>state.cart.cart)

  return (
    <nav className='fixed top-0 left-0 w-screen z-10 h-[7vh] text-white p-5 flex items-center justify-between bg-[#000000]'>
        <Link to='/' className='hover:scale-105 ease duration-200 hover:text-xl'>
        <h1>FakeCommerce</h1>
        </Link>
        <Link to='/cart'>
          <Badge badgeContent={cart.length} color="primary">
              <FiShoppingCart size={25}/>
          </Badge>
        </Link>
    </nav>
  )
}

export default Navbar