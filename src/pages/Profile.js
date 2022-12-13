import React from 'react'
import SRMLogo from '../images/SRMLogo.svg'
import ProfileLogo from '../images/ProfileLogo.svg'
const Profile = () => {
  return (
    <div className='pl-[20px] flex flex-col'>
        <div className='flex flex-row justify-around mt-[10px] mb-[30px]'>
            <img src={SRMLogo} alt="SRM Logo" className='h-[90px]'/>
            <div className='flex flex-row justify-between bg-navbarblue rounded-2xl font-bold w-[1300px] px-[70px]'>
                <a className='text-customwhite py-[33px]'>Awards</a>
                <a href="/papers" className='text-customwhite py-[33px]'>Papers/Patents</a>
                <a className='text-customwhite py-[33px]'>Funds Received</a>
                <a className='text-customwhite py-[33px]'>Other Noteworthy Activities</a>
                <button className='bg-customblack text-customwhite rounded-2xl my-[25px] px-[20px]'>Logout</button>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col border border-black rounded-2xl w-[300px] ml-[15px] justify-center items-center bg-customgray'>
                <img src={ProfileLogo} alt="Profile Logo" className='h-[183px] rounded-full w-[164px] mt-[20px]'/>
                <label className='mt-[20px] font-bold'>Faculty Name</label>
                <label className='text-sm'>Employee Name</label>
                <label className='mt-[20px] font-bold'>Designation</label>
                <label className='text-sm'>Assistant Professor</label>
                <label className='mt-[20px] font-bold'>Employee ID</label>
                <label className='text-sm'>SRM373</label>
                <label className='mt-[20px] font-bold'>Email</label>
                <label className='text-sm'>srmkc@srmist.edu.in</label>
                <label className='mt-[20px] font-bold'>Contact Number</label>
                <label className='text-sm'>9382765054</label>
                <label className='mt-[20px] font-bold'>Date of Joining</label>
                <label className='text-sm mb-[50px]'>29/04/2001</label>
            </div>

            <label className='text-4xl w-[1330px] my-[300px]'>Hello User</label>
        </div>
    </div>
  )
}
export default Profile