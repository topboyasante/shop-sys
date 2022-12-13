import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { cartActions } from '../redux/cartSlice';

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart.cart)
  function clearCart(){
    dispatch(cartActions.clearCart())
  }
  return (
    <main className='pt-[7vh] text-white'>
        <section className='max-w-[1240px] mx-auto h-[93vh]'>
            <div className='flex justify-between items-center px-5'>
                <h1 className='text-xl my-2'>Cart</h1>
                <button onClick={clearCart} 
                className='px-4 py-1 rounded-md bg-[#121212] hover:scale-105 ease duration-300'>
                    <p>Clear Cart</p>
                </button>
            </div>
            <hr />
            {cart.length > 0 ?
            <section className='my-5 flex flex-col gap-5 p-5'>
            {cart.map((item)=>{
                 function removeFromCart(){
                    dispatch(cartActions.removeFromCart(item.id))
                  }
                return(
                    <section className='flex justify-around items-center bg-[#121212] p-3 rounded-md'>
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
                        <RiDeleteBin6Line size={25} onClick={removeFromCart}/>
                        </div>
                    </section>
                )
            })}
        </section>:
        <section>
            <p className='text-center text-2xl py-5 text-gray-400'>Cart is Empty.</p>
        </section>}
        </section>
   </main>
  )
}

export default Cart