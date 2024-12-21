import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-[#42C8B7] font-bold text-[1.5rem] h-[100vh] flex items-start justify-center px-[1rem]  '>
    <div className=' bg-[#FFFFFF] pb-[3rem] rounded-xl flex flex-col gap-[2rem] w-[100%] sm:w-[100%] lg:mx-[20vw] mt-[1rem]'>
    <p className='text-center'>Login</p>
   <div className='flex flex-col px-[1rem] gap-[1rem]'>
   <div className='flex flex-col w-[100%]'>
   <label className='capitalize'>email address</label>
   <input type="email" className=' font-normal border text-[1rem] h-[3.3rem] rounded-md placeholder:font-normal placeholder:text-[1.1rem] outline-[#42C8B7] placeholder:pl-[.4rem]' placeholder='Enter Email' />
   </div>
   <div className='flex flex-col'>
   <label className='capitalize'>Password</label>
   <input type="password" className=' font-normal text-[1rem] border h-[3.3rem] outline-[#42C8B7] rounded-md placeholder:font-normal placeholder:text-[1rem] placeholder:pl-[.4rem]' placeholder='Enter Password' />
   </div>
   <div className=' mt-[-.9rem] mb-[.5rem]'>
   <p className='text-[1rem] font-normal absolute text-[red] hidden '>**invalid email or password**</p>

   </div>
   <div className='flex font-normal items-center text-[1.2rem]'>
    <input type="checkbox"  className='w-6 h-4'/>
    
    <p>Remember me</p>
   </div>
   <button className='bg-[#42C8B7] py-[.4rem] rounded-md text-[#FFFFFF]'>Submit</button>
   <div className='flex gap-[.2rem] justify-center'>
   <p className='text-center text-[1rem] font-normal'>Don't have acount</p>
   <Link to={"/signup"} className='text-center font-normal text-[1rem] text-[blue]'>Sign up</Link>
   </div>
   </div>
    </div>

    

      
    </div>
  )
}

export default Login
