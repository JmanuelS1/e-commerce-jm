import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import ProdCard from '../components/HomePage/ProdCard'
import './styles/homePags.css'
import FilterPrice from '../components/HomePage/FilterPrice'
import FilterCategory from '../components/HomePage/FilterCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const body = document.querySelector('body')

const HomePage = () => {

  const [prodCategory, setProdCategory] = useState('')
  const [prodPrice, setProdPrice] = useState({ from: 0, to: Infinity })
  const [prodName, setProdName] = useState('')
  const [products, getProducts] = useFetch()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    getProducts(url)
  }, [])

  const textInput = useRef()

  const handleChange = () => {
    setProdName(textInput.current.value.toLowerCase().trim())
  }

  const prodFilters = (prod) => {
    const perName = prod.title.toLowerCase().includes(prodName)
    const perPrice = +prod.price <= +prodPrice.to && +prod.price >= +prodPrice.from
    const perCategory = prodCategory ? prod.categoryId === +prodCategory : prod
    return perName && perPrice && perCategory
  }

  const handleDark = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  };


  return (
    <div className='homepage'>
      <div className='homepage__filters'>
        <div className='homepage__filtername'>
          <input ref={textInput} onChange={handleChange} placeholder='what are you loooking for?' type='text' />
          <button className='homepage__btnlupa'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>

        <FilterPrice
          setProdPrice={setProdPrice}
        />


        <FilterCategory
          setProdCategory={setProdCategory}
        />

        <button className={`homepage__darkbtn ${darkMode ? 'light-mode' : ''}`}
          onClick={handleDark} title='change mode'>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className='homepage__container'>
        {
          products?.filter(prodFilters).map((prod) => (
            <ProdCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>

    </div>
  )
}
export default HomePage