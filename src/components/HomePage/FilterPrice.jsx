import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterPrice.css'


const FilterPrice = ({setProdPrice}) => {

     const { handleSubmit, register, reset } = useForm();

     const submit = data => {
          setProdPrice({
               from: data.from || 0,
               to: data.to || Infinity,
          })
          reset({
               from: '',
               to: '',
          })
     }

     return (
          <form className='filterprice' onSubmit={handleSubmit(submit)}>
               <div className='filterprice__item'>
                    <label htmlFor="from">From</label>
                    <input {...register('from')} id='from' type="text" placeholder='From $' />
               </div>
               <div className='filterprice__item'>
                    <label htmlFor="to">To</label>
                    <input {...register('to')} id='to' type="text" placeholder='To $'/>
               </div>
               <button className='filterprice__btn' title='filter for price'>Filter price</button>
          </form>
     )
}
export default FilterPrice