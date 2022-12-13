import React from 'react'
import SRMLogo from '../images/SRMLogo.svg'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
        <img src={SRMLogo} alt="SRM Logo" className='h-[100px]'/>
    </div>
  )
}

export default Navbar