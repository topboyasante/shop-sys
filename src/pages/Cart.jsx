import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { cartActions } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cart = useSelector((state)=>state.cart.cart)
  let totalPrice =  0
  cart.forEach((item)=>{
    totalPrice += (item.price) * item.qtyInCart
  })
  function clearCart(){
    dispatch(cartActions.clearCart())
  }
  return (
    <main className='pt-[7vh] text-white'>
        <section className='max-w-[1240px] mx-auto h-[93vh]'>
            <div className='flex justify-between items-center px-5'>
                <h1 className='text-xl my-2'>Cart</h1>
                <p className='text-2xl'>£ {totalPrice}</p>
                <button onClick={clearCart} 
                className='px-4 py-2 rounded-md bg-[#151515] hover:scale-105 ease duration-300 my-2'>
                    <p>Clear Cart</p>
                </button>
            </div>
            <hr />
            {cart.length > 0 ?
            <section className='my-5 flex flex-col gap-5 px-1 py-5'>
            {cart.map((item)=>{
                const itemTotalPrice = (item.price) * item.qtyInCart
                 function removeFromCart(){
                    dispatch(cartActions.removeFromCart(item.id))
                  }
                  function increaseItemValue(){
                    dispatch(cartActions.increaseItem(item.id,item.name,item.price))
                  }
                  function decreaseItemValue(){
                    dispatch(cartActions.reduceItem(item.id,item.name,item.price))
                  }
                return(
                   <main key={item.id}>
                     <section className='flex justify-around items-center bg-[#131313] p-3 rounded-md' >
                        <div className='w-[50%] flex justify-around items-center'>
                            <p>{item.name}</p>
                            <div className='flex gap-3'>
                                <button onClick={decreaseItemValue}>-</button>
                                <p className='text-center'>{item.qtyInCart}</p>
                                <button onClick={increaseItemValue}>+</button>
                            </div>
                        </div>
                        <div className='w-[50%] flex items-center justify-around'>
                        <p>Price:£ {itemTotalPrice}</p>
                        <RiDeleteBin6Line size={25} onClick={removeFromCart}/>
                        </div>
                    </section>
                   </main>
            )})}
        </section>:
        <section>
            <p className='text-center text-2xl py-5 text-gray-400'>Cart is Empty.</p>
        </section>}
        <br />
        <div className='flex justify-center items-center gap-5'>
          <button
              onClick={() => navigate(-1)}>
              <p className='w-[100px] bg-[#121212] px-4 py-2 rounded-md hover:scale-105 ease duration-300'>Go Back</p>
          </button>
          <Link to='/'>
              <button>
                  <p className='w-[100px] bg-[#121212] px-4 py-2 rounded-md hover:scale-105 ease duration-300'>Shop</p>
              </button>
          </Link>
        </div>
        </section>
   </main>
  )
}

export default Cart