import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
  return (
    <header className='navbar'>
    <h1 className='navbar__title' title='Go home!'><Link to='/'>e-commerce</Link></h1>
    <ul className='navbar__list'>

      <li className='navbar__item'>
        <Link to='/login'>
          <FontAwesomeIcon icon={faUser} className='icon' title="User"/>
          <span>Login</span>
          </Link>
        </li>

      <li className='navbar__item'>
        <Link to='/purchases'>
          <FontAwesomeIcon icon={faBoxArchive} className='icon' title="Purchases"/>
          <span>Purchases</span>
          </Link>
        </li>

      <li className='navbar__item'>
        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} className='icon' title="Shopping Cart" />
        <span>Shopping Cart</span>
        </Link>
        </li>
        
    </ul>
    </header>
  )
}
export default NavBar