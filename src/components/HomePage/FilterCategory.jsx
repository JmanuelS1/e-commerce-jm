import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'

const FilterCategory = ({setProdCategory}) => {

     const [categories, getCatergories] = useFetch()

     useEffect(() => {
          const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
          getCatergories(url)
     }, []);
const selectOptions = useRef();

     const handleChange = () => {
          setProdCategory(selectOptions.current.value);
     }

     return (
          <select ref={selectOptions} onChange={handleChange}>
               <option value="">All Categories</option>
               {
                    categories?.map(category => (
                         <option key={category.id} value={category.id}> {category.name} </option>
                    ))
               }
          </select>
     )
}
export default FilterCategory