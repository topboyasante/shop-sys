import React from 'react'
import { useSelector} from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ItemDetail from './pages/ItemDetail'
import Store from './pages/Store'

function App() {
  return (
    <main className='bg-[#000000]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path=':itemID' element={<ItemDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </main>
  )
}

export default App