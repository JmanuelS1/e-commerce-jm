import React from 'react'
import './styles/prodCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCartThunk } from '../../store/slices/cart.slices'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProdCard = ({ prod }) => {

     const dispatch = useDispatch();

     const navigate = useNavigate();

     const handleView = (e) => {
          e.preventDefault();
          navigate(`/product/${prod.id}`)
     };

     const handleBuy = (e) => {
          e.preventDefault();
          dispatch(postCartThunk('/cart', {
               quantity: 1,
               productId: prod.id,
          }));
     }

     return (
          <article className='prodcard'>
               <figure className='prodcard__img'>
                    <img className='prodcard__img-1' src={prod?.images[0].url} alt="product image" />
                    <img className='prodcard__img-2' src={prod?.images[1].url} alt="product image" />

               </figure>
               <hr />
               <ul className='prodcard__list'>
                    <li className='prodcard__item'><span>{prod?.brand}</span><span>{prod?.title}</span></li>
                    <li className='prodcard__item'><span>Price:</span><span>$ {prod?.price}</span></li>
               </ul>
               <div className='prodcard__buttons'>
                    <button onClick={handleView}>View details</button>
                    <button className='prodcard__add' onClick={handleBuy}>Add to cart <div className='prodcard__iconcontainer'><FontAwesomeIcon icon={faCartShopping} className='prodcard__icon' title="Shopping Cart" /></div></button>
               </div>
          </article>
     )
}
export default ProdCard