import React from 'react'
import './SubTotal.css'
import { SubToTalValue } from '../statemgt/Reducer';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../statemgt/StateProvider'

const SubTotal = () => {
  const [{basket},dispatch]= useStateValue();

  return (
    <div className='subTotal'>

      <h1 className='subTotalTitle'>Subtotal:({basket.length} items): $ {SubToTalValue(basket)}</h1>
      <p className='subtotalInput'>
              <input type="checkbox" /> This order contains a gift 
       </p><br />
       <button className='proceedToCheckout'>Proceed To Checkout</button>
       
    </div>
  )
}

export default SubTotal
