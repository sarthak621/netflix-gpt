import React from 'react'
import Header from './Header'
import {useState} from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true)

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" alt="bg"/>
      </div>

      <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 '>

        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In": "Sign Up"}</h1>
        { !isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500 rounded-md '/>}
        <input type="text" placeholder='Email or mobile number' className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500 rounded-md '/>
        

        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500 rounded-md'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In": "Sign Up"}</button>

        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now": "Already Registered? Sign In Now"}</p>              
      </form>
    </div>
  )
}

export default Login