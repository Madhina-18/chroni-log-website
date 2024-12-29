import React, { useEffect } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../config/firebase';
import { useState } from 'react';
import { signOut } from 'firebase/auth';



function Navbar() {
  const navigate = useNavigate()

const [log,setLog] = useState(false)





  useEffect(()=>{
    auth.onAuthStateChanged(function(user){
      if(user)
      {  
        setLog(true)
        console.log("User logged In")
      }
      else{
        setLog(false)
        console.log("User logged Out")
      }
    })

  },[])

  function logout()
  {
    signOut(auth)
  }


  return (
    <div className='py-5 flex flex-col md:flex-row justify-between items-center  '>
      <h2 className='text-2xl font-serif hidden md:block tracking-wider text-[#22C6F0]'>CHRONILOG</h2>
      <div className='flex items-center font-serif  '>
        <Link className='list-none px-5 hover:text-[#22C6F0] cursor-pointer animate-pulse duration-500' to={"/home"}>Home</Link>
        <Link className='list-none px-5 hover:text-[#22C6F0] cursor-pointer animate-pulse duration-500' to={"/blogs"}>Blogs</Link>
        <Link className='list-none px-5 hover:text-[#22C6F0] cursor-pointer animate-pulse duration-500' to={"/contact"}>Contact</Link>

        {
          log? <button className='button-style ' onClick={logout}>Logout</button>: <button className='button-style ' onClick={() => navigate("/login")}>Login</button>
        }
       
      </div>
    </div>
  )
}

export default Navbar