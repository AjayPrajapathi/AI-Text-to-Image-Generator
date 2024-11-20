import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='absolute top-0 left-0 bottom-0  right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-cnter text-2xl text-neutral-700 font-medium'>Sign Up</h1>
            <p className='text-sm'>Welcome Back Please Sign in to continue</p>
            <div className='border px-6 py-2 flex item-center gap-2 rounded-full mt-5'>
                <img src={assets} alt=''/>
                <input className='outline-none text-sm' type='text' placeholder='Full Name' required/>
            </div>
        </form>

    </div>
  )
}

export default Login