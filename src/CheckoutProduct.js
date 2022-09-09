import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct  ({ image, rating, title, price, id ,hideButton})  {
    const [{ basket }, dispatch] = useStateValue();

    // console.log(image, rating, title, price, id )
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
    <div className='checkout__product'>
        <img className='checkoutproduct__image' src={image} alt=" "/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>        
            <p className='checkoutproduct__price'>
            <small>$</small>
            <strong>{price}</strong></p>
        <div className="checkoutproduct__rating">
                    {Array(rating)
                         .fill()
                        .map((e,i) => (<p key={i}>🌟</p>))
                    }
            </div>
            {!hideButton && (
                  <button onClick={removeFromBasket}>Remove From Basket</button>
            )}{''}

        </div>
    </div>
  )
}

export default CheckoutProduct