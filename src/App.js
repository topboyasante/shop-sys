import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ItemDetail from './pages/ItemDetail'
import Store from './pages/Store'
import { ShopContext } from './context/ShopContext'

function App() {
  const [searchText,setSearchText] = useState('')
  return (
    <ShopContext.Provider value={{searchText,setSearchText}}>
      <main className='bg-[#000000] h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path=':itemID' element={<ItemDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </main>
    </ShopContext.Provider>
  )
}

export default App