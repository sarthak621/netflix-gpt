import React, { useEffect } from 'react'

// import { NetflixUserIconImg } from '../utils/netflixUserIcon'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { LOGO } from '../utils/constants'
const Header = () => {

  const navigate=useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(store=>store.user)

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

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between '>
       <img className="w-44"src={LOGO} alt="logo" />

       {user && (
        <div className='flex p-3'>
         <img src={user?.photoURL}  alt="photo-git" className='w-12 h-12'/>
         <button onClick={handleSignOut} className='font-bold text-white'> Sign Out</button>
       </div>
       )}
    </div>
  )
}

export default Header