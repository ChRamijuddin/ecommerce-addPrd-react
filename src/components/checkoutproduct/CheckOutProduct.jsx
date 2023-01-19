import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useStateValue } from '../statemgt/StateProvider'
import './CheckOutProduct.css'

const CheckOutProduct = ({ id, title, image, price, rating }) => {
    const [{basket},dispatch] = useStateValue();

    const removeFromCart = () =>{
        // console.log("del")
         dispatch({
                type:'REMOVE_FROM_BASKET',
                id:id
            })
    }
    return (
        <div className='checkOutProduct'>
            <img className="checkOutProduct_image" src={image} alt="" />

            <div className="checkOutProduct_info">
                <p className='checkOutProduct_title'>{title}</p>

                <p className="checkOutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkOutProduct_rating">
                    {/* {Array(rating)
                        .fill()
                        .map((_) => {
                            <p> * </p>;
                        })} */}
                    {
                        "*".repeat(rating)
                    }
                </div>
                <button onClick={removeFromCart} className="removeFromCartBtn"> Remove from card</button>
            </div>
        </div>
    )
}

export default CheckOutProduct
