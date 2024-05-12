import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './styles/login.css'

const Login = () => {

  const [hasToken, setHasToken] = useState();
  const loginUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setHasToken(localStorage.getItem('token'))
  }, [])


  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    loginUser(url, data)
    reset({
      email: '',
      password: '',
    })
    setTimeout(() => {
      setHasToken(localStorage.getItem('token'))
      navigate('/cart')
    }, 3000)
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setHasToken();
  }

  return (
    <div className="login-container">
      {hasToken ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <label htmlFor="email">Email</label>
              <input {...register('email')} id='email' className='login-input' type="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input {...register('password')} id='password' className='login-input' type="password" />
            </div>
            <button className="login-button">Login</button>
          </form>
          <p className="login-link">If you are not registered yet <Link to='/register'>Register here</Link></p>
        </div>
      )}
    </div>
  )
}

export default Login