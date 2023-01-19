import React from 'react'
import CheckOutProduct from '../checkoutproduct/CheckOutProduct';
import { useStateValue } from '../statemgt/StateProvider'
import SubTotal from '../subtotal/SubTotal';
import './CheckOut.css'

const CheckOut = () => {
    const [{basket}]= useStateValue();
    // console.log(basket,"checkoutpage")

  return (
    <div className='checkout'>
      <div className="checkout_left">
      {basket?.length===0 ? (
         <div>
            <h2>Your basket is empty</h2>
            <p>You have no items in your basket.To buy or add any item in the basket,
                please click on "Add To Cart" button from the product list.
            </p>
           </div>
      ) : (
        <div className='checkout_cart'>
            <h2 className='checkout_title' style={{marginLeft:"20px"}}>Your Shopping Basket</h2>
            {basket.map(item=>{
                return(
                    <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ) 
            })}
        </div>
      )}
      </div>
      {basket.length > 0 && (
          <div className="checkout_right">
               <SubTotal />  
          </div>
      )}
      
    </div>
  )
}

export default CheckOut
