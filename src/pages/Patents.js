import React from "react";
import SRMLogo from "../images/SRMLogo.svg";
import ProfileLogo from "../images/ProfileLogo.svg";
const Patents = () => {
  return (
    <div className="pl-[20px] flex flex-col">
      <div className="flex flex-row justify-around mt-[10px] mb-[30px]">
        <img src={SRMLogo} alt="SRM Logo" className="h-[90px]" />
        <div className="flex flex-row justify-between bg-navbarblue rounded-2xl font-bold w-[1300px] px-[70px]">
          <a className="text-customwhite py-[33px]">Awards</a>
          <a href="/papers" className='text-customwhite py-[33px]'>Papers</a>
          <a href="/patents" className='text-customwhite py-[33px]'>Patents</a>
          <a className="text-customwhite py-[33px]">Funds Received</a>
          <a className="text-customwhite py-[33px]">
            Other Noteworthy Activities
          </a>
          <button className='bg-customblack text-customwhite rounded-2xl my-[25px] px-[20px]'><a href='/'>Logout</a></button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col border border-black rounded-2xl w-[300px] ml-[15px] justify-center items-center bg-customgray">
          <img
            src={ProfileLogo}
            alt="Profile Logo"
            className="h-[183px] rounded-full w-[164px] mt-[20px]"
          />
          <label className="mt-[20px] font-bold">Faculty Name</label>
          <label className="text-sm">Kanupriya Johari</label>
          <label className="mt-[20px] font-bold">Designation</label>
          <label className="text-sm">Assistant Professor</label>
          <label className="mt-[20px] font-bold">Employee ID</label>
          <label className="text-sm">SRM373</label>
          <label className="mt-[20px] font-bold">Email</label>
          <label className="text-sm">srmkc@srmist.edu.in</label>
          <label className="mt-[20px] font-bold">Contact Number</label>
          <label className="text-sm">9382765054</label>
          <label className="mt-[20px] font-bold">Date of Joining</label>
          <label className="text-sm mb-[50px]">29/04/2001</label>
        </div>
        <div className="flex flex-col mx-[40px] w-[1260px]">
          <label className="pt-[20px] font-bold text-4xl underline">
            Patents
          </label>
          <table class="border-collapse border border-slate-500 mt-[30px] bg-customgray">
            <thead>
              <tr className="h-[50px] shadow-md">
                <th class="border border-slate-600 w-[420px]">
                  Title of the Patent
                </th>
                <th class="border border-slate-600 w-[420px]">
                  Patent Register Number
                </th>
                <th class="border border-slate-600">Proof</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[80px] shadow-md">
                <td class="border border-slate-700">Indiana</td>
                <td class="border border-slate-700">Indianapolis</td>
              </tr>
              <tr className="h-[80px] shadow-md">
                <td class="border border-slate-700">Ohio</td>
                <td class="border border-slate-700">Columbus</td>
              </tr>
              <tr className="h-[80px] shadow-md">
                <td class="border border-slate-700">Michigan</td>
                <td class="border border-slate-700">Detroit</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row items-center justify-center">
          <a href="/newdata"><button className="border border-black rounded-2xl bg-customgray mt-[60px] w-[150px] font-bold py-[3px]">Upload New Data</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patents