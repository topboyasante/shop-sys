import React, { useContext } from 'react'
import {BsSearch} from 'react-icons/bs'
function SearchBar() {
  return (
    <section className='mx-auto my-3 flex justify-between items-center border-[1px] gap-2 border-gray-400 bg-[#f0f0f0] rounded-md p-2 w-[80%]'>
        <BsSearch size={25} color='#000000'/>
        <input type="search" className='w-full outline-none text-black bg-[#f0f0f0]'placeholder='Search For Something' 
       />
    </section>
  )
}

export default SearchBar