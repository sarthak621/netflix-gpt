import React, { useRef } from 'react'
import Header from './Header'
import {useState} from 'react'
import {checkValidData} from '../utils/validate' 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';
const Login = () => {

  //for toggling the signin or singup form
  const [isSignInForm, setIsSignInForm]=useState(true)

  //to validate email and password
  const email= useRef(null);
  const password= useRef(null);
  const name=useRef(null)

  //for error message 
  const [errorMessage,setErrorMessage]=useState(null)

  

  const dispatch=useDispatch();

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick=()=>{
    //validate the form data--> for this we write validation logic in utils
     const message= checkValidData(email.current.value, password.current.value)
    //  console.log(message)
    if(!message==="null"){
      setErrorMessage(message)
      return;
    }
    // setErrorMessage(message)
    // if(message) return;

    // sign in sign up logic
    if(!isSignInForm){
      //sign up logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        //update the user 
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVATAR
        }).then(() => {

            const {uid,email,displayName,photoURL} = auth.currentUser;
             dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));

        }).catch((error) => {
          setErrorMessage(error.message)
        });

        // console.log(user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });

    }
    else{
      //sign in logic
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;

     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode + "-" + errorMessage)
     });


    }
  }


  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className="h-screen object-cover" src={BG_URL} alt="bg"/>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 '>

        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In": "Sign Up"}</h1>
        { !isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500 rounded-md '/>}
        <input ref={email} type="text" placeholder='Email or mobile number' className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500 rounded-md '/>
        

        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500 rounded-md'/>
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In": "Sign Up"}</button>

        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now": "Already Registered? Sign In Now"}</p>              
      </form>
    </div>
  )
}

export default Login