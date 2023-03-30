import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const { createUser } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPass) {
      return setError('Passwords do not match')
    }

    try {
      setError('');
      setLoading(true);
      await createUser(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
    }

  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign up for your account!</h1>
        <p className='py-2'>Already have an account? <Link className='underline' to='/signin'>Sign in.</Link></p>
        {error && <p className='text-red-600'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border p-3'type='email' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className='border p-3'type='password' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Confirm Password</label>
            <input onChange={(e) => setConfPass(e.target.value)} className='border p-3'type='password' />
          </div>
          <button disabled={loading} className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup