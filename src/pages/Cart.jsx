import React from 'react'
import { useSelector } from 'react-redux';
import {RiDeleteBin6Line} from 'react-icons/ri'

function Cart() {
  const cart = useSelector((state)=>state.cart.cart)
  return (
    <main className='pt-[7vh] text-white'>
        <section className='max-w-[1240px] mx-auto h-[93vh]'>
            <h1 className='text-center text-xl my-2'>Cart</h1>
            <hr />
            <section className='my-5 flex flex-col gap-5 p-5'>
                {cart.map((item)=>{
                    return(
                        <section className='flex justify-around items-center border p-3'>
                            <div className='w-[45%] flex justify-around items-center'>
                                <p>{item.name}</p>
                                <div className='flex gap-3'>
                                    <button>-</button>
                                    <p className='text-center'>{item.qtyInCart}</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className='w-[45%] flex items-center justify-around'>
                            <p>Price: ${item.price}</p>
                            <RiDeleteBin6Line/>
                            </div>
                        </section>
                    )
                })}
            </section>
        </section>
   </main>
  )
}

export default Cart