import React, { useEffect } from 'react'

// import { NetflixUserIconImg } from '../utils/netflixUserIcon'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { LOGO, SUPPORTED_LANGAUGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'
const Header = () => {

  const navigate=useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
    }).catch((error) => {
      // An error happened.
      // navigate("/error")
    });
  }

  useEffect(()=>{
    //get it from firebase google from manage users
    //we are doing this for setting up the autehntication
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          
          
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
          navigate("/browse")
         
        } else {
            dispatch(removeUser())
            navigate("/")
          

        }
      });
      
      // unsubscribe when components will unamount
      return ()=>unsubscribe()
},[])

  const handleGptSearchClick=()=>{
   //toggle gpt search button
   dispatch(toggleGptSearchView())
  }  

  const handleLanguageChange=(e)=>{
      // console.log(e.target.value)
      dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between '>
       <img className="w-44"src={LOGO} alt="logo" />

       {user && (
        <div className='flex p-3'>
          {showGptSearch && <select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
            {SUPPORTED_LANGAUGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

          </select>}
         <button onClick={handleGptSearchClick}
          className='py-2 px-4 m-2 bg-purple-800 text-white rounded-md mx-4 my-2'>{showGptSearch?"Home Page":"GPT Search"}</button>
         <img src={user?.photoURL}  alt="photo-git" className='w-12 h-12'/>
         <button onClick={handleSignOut} className='font-bold text-white'> Sign Out</button>
       </div>
       )}
    </div>
  )
}

export default Header