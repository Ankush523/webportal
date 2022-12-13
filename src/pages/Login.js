import React from "react";

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col border border-black w-[330px] rounded-xl py-[40px] px-[15px] bg-customgray">
        <label className="font-bold text-3xl">Login</label>
        <input placeholder="Username" className="border border-customblue rounded-xl mt-[40px] p-[10px] bg-customgray"/>
        <input placeholder="Password" className="border border-customblue rounded-xl mt-[80px] p-[10px] bg-customgray mb-[30px]"/>
        <a href="" className="text-customblue text-right">
          Forgot Password?
        </a>
        <div className="grid  justify-items-end mt-[30px]">
          <button className="bg-customblue text-customwhite w-[100px] rounded-xl px-[10px] py-[6px] mb-[10px]">Submit</button>
        </div>
        <div className="grid justify-items-start">
          <label>
            <input type="checkbox" className=""/>
                Remember Me
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
