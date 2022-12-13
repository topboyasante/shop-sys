import React from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import {AiOutlineClose} from 'react-icons/ai'
import {cartActions} from '../redux/cartSlice.js'


function ItemDetail() {
  const { itemID } = useParams()
  const dispatch = useDispatch()
  const shopItems = useSelector((state)=>state.shop.items)
  const currentItem = shopItems[itemID-1]

  const newItemToBeAdded = {
    id:currentItem.id,
    name:currentItem.name,
    price:currentItem.price,
    specs:currentItem.specs,
    category:currentItem.category,
    qtyInCart:currentItem.qtyInCart
  }

  function addToCart(){
    dispatch(cartActions.addItemToCart(newItemToBeAdded))
    handleClick()
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Link to='/cart'>
        CART
      </Link>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <AiOutlineClose/>
      </IconButton>
    </React.Fragment>
  );

  return (
    <main className='pt-[7vh] text-white'>
        <main className='max-w-[1500px] mx-auto'>
            <section className='flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between lg:gap-10 lg:h-[93vh] p-5 lg:p-0'>
              <img src={currentItem.img} alt={currentItem.name} />
              <section className='my-3'>
                <h1 className='text-3xl'>{currentItem.name}</h1>
                <p>{currentItem.specs}</p>
                <p>{currentItem.desc}</p>
                <p>${currentItem.price}</p>
                <button className='bg-[#ffffff] text-black px-4 py-2 rounded-md hover:scale-105 ease duration-200 my-2' onClick={addToCart}>
                  Add To Cart
                </button>
              </section>
              
            </section>
            <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={`${currentItem.name} has been Added to Your Cart.`}
            action={action}
          />
        </main>
    </main>
  )
}

export default ItemDetail