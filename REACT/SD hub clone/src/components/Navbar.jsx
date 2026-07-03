import React from 'react'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-around mx-10 my-5">
      <img src="https://sdhub.in/wp-content/uploads/2024/05/cropped-Skills-Development-Hub-SM-Logos-2.png" className="w-52" />
      <div className="flex items-center justify-around  gap-18 font-medium text-[15px]">
        <ul className="flex justify-center gap-8 text-base ">
          <li className='delay-150 ease-linear hover:text-[#4F80FF] hover:underline hover:underline-offset-4'><NavLink to="/">HOME</NavLink></li>
          <li className='delay-150 ease-linear hover:text-[#4F80FF] hover:underline hover:underline-offset-4'><NavLink to="About">ABOUT US</NavLink></li>
          <li className='delay-150 ease-linear hover:text-[#4F80FF] hover:underline hover:underline-offset-4'> <NavLink to="Courses">COURSES</NavLink></li>
          <li className='delay-150 ease-linear hover:text-[#4F80FF] hover:underline hover:underline-offset-4'> <NavLink to="Registration">REGISTRATION FORM</NavLink></li>
        </ul>

        <button className="w-48 rounded-sm border p-2 border-[#4F80FF] text-[#4F80FF] "><NavLink to='Contactus'>Contact us</NavLink></button>
      </div>
    </div>

  )
}

export default Navbar