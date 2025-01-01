import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from "lucide-react";



const StudentLogin = () => {
  return (
    <div className='p-3 bg-[#EFF6FF] flex h-screen w-screen'>
        {/* left side */}
        <div
            className={`w-[434px] h-full rounded-xl transition-all duration-1000 ease-in-out bg-primary px-6 py-8 flex flex-col justify-end`}
        >
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 -ml-1'>
                    <ArrowLeft size={20} color='white'/>
                    <Link to={"/"}>
                        <p className='text-white'>Back to Home</p>
                    </Link>
                </div>
                <Link to={"/auth/student-signup"}>
                    <span className='text-white'>Sign Up?</span>
                </Link>
            </div>

        </div>


        {/* right side */}
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <div className='w-[476px]'>
                {/* heading */}
                <div className='flex w-full items-start'>
                    <h1 className='text-start text-3xl text-primary font-bold'>Welcome Back!</h1>
                </div>

                {/* button to switch bw student and company */}
                <div className="bg-white rounded-full shadow-lg p-1 flex gap-1 mt-4">
                    <Link to="/auth/student-login" >
                        <button
                            className={`px-16 py-4 rounded-full transition-all duration-500 ease-in-out bg-primary text-white`}
                        >
                            I'm a Student
                        </button>
                    </Link>
                    
                    <Link to="/auth/company-login" >
                        <button
                            className={`px-16 py-4 rounded-full transition-all duration-500 ease-in-out bg-[#F6F6F6] text-gray-600`}
                        >
                            I'm a Company
                        </button>
                    </Link>
                </div>

                {/* student login form */}
                <form className='mt-8 flex flex-col gap-4'> 

                    {/* email */}
                    <div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-gray-600">Email</span>
                            <input 
                                type="email" 
                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[476px]"
                                placeholder="johndoe@example.com"
                                />
                        </div>
                    </div>

                    {/* password */}
                    <div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-gray-600">Password</span>
                            <input 
                                type="email" 
                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[476px]"
                                placeholder="••••••••"
                                />
                        </div>
                    </div>

                    <button className="w-[476px] bg-primary rounded-xl py-2.5 text-white mt-4">
                        Sign In
                    </button>

                </form>



            </div>

        </div>
            

    </div>
  )
}

export default StudentLogin