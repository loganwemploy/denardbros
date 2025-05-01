'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Buttons = ()=>(

  <div className="buttons flex gap-[20px]">
    <Link className='nav-button' href="auth/login">Sign in</Link>
    <Link className='nav-button bg-red-500' href="auth/signup">Sign up</Link>

  </div>
)

const Header = () => {

  const [toggle,setToggle] = useState(false);


  return (
    <div className='bg-white flex justify-around items-center px-[0px] py-[5px] text-black  w-full'>
    <div className='flex items-center justify-center gap-2 text-black w-1/3'> 
      <span> &nbsp; &nbsp;</span>
      <h3>Illinois</h3> 
      <img className='mix-blend-multiplyn max-w-16' src="https://dejpknyizje2n.cloudfront.net/media/carstickers/versions/map-illinois-state-sticker-uc40b-x450.png" alt="" />
    </div>

     {/* <h3>79°</h3> */}
   
      
      <Link href="/" className='font-semibold text-[25px] w-1/3'>
      {/* DENARD&nbsp;BROS */}
     <img className='rounded invert mix-blend-multiply' style={{maxHeight:'6em',marginLeft:'1.15em'}} src="https://pbs.twimg.com/profile_images/1674920905472892930/wggX-KbH_200x200.jpg" alt="" />
      </Link>
  
      <Link href="/" className='font-semibold text-[25px] w-1/3' style={{opacity:'0'}}>
      DENARD&nbsp;BROS
      </Link>


     <ul className={`fixed w-full h-full bg-red-400 ${toggle ? "top-0" : '-top-[100%]'} left-0
     flex flex-col justify-center xl:relative xl:top-0 xl:-left-0 xl:bg-transparent xl:flex-row 
      items-center gap-[30px]`}>
      <li><a className='nav-item' href="#">Home</a></li>
      <li><a className='nav-item' href="denard-bros">Denard Bro's</a></li>
      <li><a className='nav-item' href="camps">Camps</a></li>
      <li><a className='nav-item' href="about">About</a></li>
      <li><a className='nav-item' href="merch">Merch</a></li>

      <div className="sm:hidden">
        {/* <Buttons /> */}
      </div>

     </ul>

     <div className="hidden sm:block">
     {/* <Buttons /> */}
     </div>

     <div className="toggle mr-[20px] xl:hidden cursor-pointer text-[35px] z-[3]">
      {
        toggle ? <MdClose onClick={()=>setToggle(false)} />
        : <HiBars3 onClick={()=>setToggle(true)} />
      }
     </div>
    </div>
  )
}

export default Header
