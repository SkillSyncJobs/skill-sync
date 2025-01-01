import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"
import { ArrowLeft, Building2, GraduationCap } from "lucide-react";

const CompanySignup = () => {

    return (
        <div className="h-screen w-screen bg-[#EFF6FF] p-3 flex">
            {/* left side */}
            <div
                className={`w-[434px] h-full rounded-xl transition-all duration-1000 ease-in-out bg-[#1F479A] px-6 py-8 flex flex-col justify-end`}
            >
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1 -ml-1'>
                        <ArrowLeft size={20} color='white'/>
                        <Link to={"/"}>
                            <p className='text-white'>Back to Home</p>
                        </Link>
                        
                    </div>
                    <Link to={"/auth/company-login"}>
                        <span className='text-white'>Login?</span>
                    </Link>
                </div>

            </div>

                
            {/* right side */}
            <div className="h-full w-full flex flex-col justify-center items-center">
                {/* button to switch bw student and company */}
                <div className="bg-white w-[476px] rounded-full shadow-lg p-1 flex gap-1">
                    <Link to="/auth/student-signup" >
                        <div
                            className={`w-[232px] py-4 rounded-full justify-center transition-all items-center flex gap-2 duration-500 ease-in-out bg-[#F6F6F6] text-gray-600`}
                        >
                            <GraduationCap size={24}/>
                            <p>I'm a Student</p>
                        </div>
                    </Link>
                    <Link to="/auth/company-signup" >
                        <div
                            className={`w-[232px] py-4 rounded-full justify-center transition-all items-center flex gap-2 duration-500 ease-in-out bg-[#1F479A] text-white`}
                        >
                            <Building2 size={20}/>
                            <p>I'm a Company</p>
                        </div>
                    </Link>
                </div>

            
                {/* company signup form */}
                <form className="mt-8 flex flex-col gap-4">

                {/* company name and phone number */}
                <div className="flex gap-4">
                    {/* company name */}
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Company Name</span>
                        <input 
                            type="text" 
                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                            placeholder="SkillSync"
                        />
                    </div>
                    {/* company phone number */}
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Company Phone Number</span>
                        <input 
                            type="text" 
                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                            placeholder="+91 1234567890"
                        />
                    </div>
                </div>

                {/* company email */}
                <div>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Company Email</span>
                        <input 
                            type="email" 
                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[476px]"
                            placeholder="example@skillsyncjob.com"
                        />
                    </div>
                </div>

                {/* password */}
                <div className="flex gap-4">
                    {/* phone number */}
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Password</span>
                        <input 
                            type="text" 
                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                            placeholder="••••••••"
                        />
                    </div>
                    {/* date of birth */}
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Confirm Password</span>
                        <input 
                            type="text" 
                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button className="w-[476px] bg-[#1F479A] rounded-xl py-2.5 text-white mt-4">
                    Next
                </button>

                </form>


            </div>
        </div>
    );
};

export default CompanySignup;
