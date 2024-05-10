import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

const Register = () => {

  const createUser = useAuth();

  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
    createUser(url,data);
    reset({
      firsName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="firstName">FirstName</label>
          <input {...register('firstName')} id='firstName' type="text" />
        </div>
        <div>
          <label htmlFor="lastName">LastName</label>
          <input {...register('lastName')} id='lastName' type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id='phone' type="text" />
        </div>
        <button>Add User</button>
      </form>
    </div>
  )
}
export default Register