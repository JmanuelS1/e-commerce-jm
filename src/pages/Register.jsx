import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/register.css'

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
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} id='firstName' className='register-input' type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} id='lastName' className='register-input' type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' className='register-input' type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' className='register-input' type="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id='phone' className='register-input' type="text" />
        </div>
        <button className="register-button">Register</button>
      </form>
    </div>
  )
}

export default Register

//   return (
//     <div>
//       <form onSubmit={handleSubmit(submit)}>
//         <div>
//           <label htmlFor="firstName">FirstName</label>
//           <input {...register('firstName')} id='firstName' type="text" />
//         </div>
//         <div>
//           <label htmlFor="lastName">LastName</label>
//           <input {...register('lastName')} id='lastName' type="text" />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input {...register('email')} id='email' type="email" />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input {...register('password')} id='password' type="password" />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone</label>
//           <input {...register('phone')} id='phone' type="text" />
//         </div>
//         <button>Add User</button>
//       </form>
//     </div>
//   )
// }
// export default Register