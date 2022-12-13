import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import { ShopContext } from '../context/ShopContext'

function Store() {
 const {searchText} = useContext(ShopContext)
 const shopItems = useSelector((state)=>state.shop.items)
  return (
    <main className='pt-[7vh] text-white bg-[#000000]'>
        <section className='h-full py-5'>
            <div className='sticky top-[6.5vh] z-10 bg-[#000000] left-0'>
                <h1 className='text-xl text-center font-[500] uppercase'>Shop</h1>
                <SearchBar/>
                <hr />
            </div>
            <section className='p-5 note-container grid gap-10 place-items-center max-w-[1240px] mx-auto '>
                {searchText !== ''?shopItems.filter(item=>item.name.toLowerCase().includes(searchText.toLowerCase())).map((item)=>{
                    return(
                       <div key={item.id} className='w-[300px] h-[460px] bg-[#121212] p-3 rounded-md hover:scale-105 ease duration-500'>
                        <img src={item.img} alt={item.name} className='rounded-t-md py-2 h-[50%] mx-auto' />
                        <hr />
                        <section className='text-center py-2 flex flex-col items-center h-[50%]'>
                            <h3 className='font-[500] text-xl'>{item.name}</h3>
                            <small className='text-gray-400'>Category: {item.category}</small>
                            <p>£{item.price}</p>
                            <p>{item.specs}</p>
                            <Link to={`${item.id}`} key={item.id} className='hover:text-gray-800 ease duration-300 '>
                            <p className='border rounded-md px-4 py-2 w-[200px] my-2 text-center hover:bg-white'>View Specifications</p>
                            </Link>
                        </section>
                       </div>
                    )
                }):shopItems.map((item)=>{
                    return(
                       <div key={item.id} className='w-[300px] h-[460px] bg-[#121212] p-3 rounded-md hover:scale-105 ease duration-500'>
                        <img src={item.img} alt={item.name} className='rounded-t-md py-2 h-[50%] mx-auto' />
                        <hr />
                        <section className='text-center py-5 flex flex-col items-center h-[50%]'>
                            <h3 className='font-[500] text-xl'>{item.name}</h3>
                            <small className='text-gray-400'>Category: {item.category}</small>
                            <p className='text-xl'>£{item.price}</p>
                            <small>{item.specs}</small>
                            <Link to={`${item.id}`} key={item.id} className='hover:text-gray-800 ease duration-300 '>
                            <p className='border rounded-md px-4 py-2 w-[200px] my-2 text-center hover:bg-white'>View Specifications</p>
                            </Link>
                        </section>
                       </div>
                    )
                })}
            </section>
        </section>
    </main>
  )
}

export default Store