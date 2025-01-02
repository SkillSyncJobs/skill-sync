import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"
import { ArrowLeft, Building2, GraduationCap } from "lucide-react";

const CompanySignup = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        // step 1
        companyName: '',
        companyPhoneNumber: '',
        companyEmail: '',
        password: '',
        confirmPassword: '',

        // step 2
        industryType: '',
        headquarterLocation: '',
        companySize: '',
        yearOfEstablishment: '',

        // step 3   // point of contact info
        pointOfContactFirstName: '',
        pointOfContactLastName: '',
        pointOfContactDesignation: '',
        pointOfContactEmail: '',
        pointOfContactPhoneNumber: '',

        // step 4
        jobRoles: {},
        areasOfExpertiseSought: {},

        // step 5
        companyLogo: '',

        // step 6   // additional info
        companyWebsite: '',
        linkedInProfile: '',

    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateStep = () => {
        switch (step) {
            case 1: {
                return (
                    formData.companyName,
                    formData.companyPhoneNumber,
                    formData.companyEmail,
                    formData.password,
                    formData.confirmPassword,
                    formData.password === formData.confirmPassword
                )
            } case 2: {
                return (
                    formData.industryType,
                    formData.headquarterLocation,
                    formData.companySize,
                    formData.yearOfEstablishment
                )
            } case 3: {
                return (
                    formData.pointOfContactFirstName,
                    formData.pointOfContactLastName,
                    formData.pointOfContactDesignation,
                    formData.pointOfContactEmail,
                    formData.pointOfContactPhoneNumber
                )
            } case 4: {
                return (
                    formData.jobRoles,
                    formData.areasOfExpertiseSought
                )
            } case 5: {
                return (
                    formData.companyLogo
                )
            } case 6: {
                return (
                    formData.companyWebsite,
                    formData.linkedInProfile
                )
            } default: {
                return true
            }
        }
    }

        const handleNext = () => {
            if (validateStep()) {
                setStep(prev => Math.min(prev + 1, 7))
            }
        }

        const handlePrevious = () => {
            setStep(prev => Math.max(prev - 1, 1))
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            if(validateStep()) {
                // handle form submission here
                console.log('form submitted: ', formData);
                setStep(7) // move to success step   
            }
        }
        
        const renderStep = () => {
            switch (step) {
                case 1:
                    return (
                        <>
                            {/* left side */}
                            <div
                                className={`w-[434px] h-full rounded-xl  bg-[#1F479A] px-6 py-8 flex flex-col justify-end`}
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

                                {/* buttons */}
                                <div className="flex gap-4 w-[476px]">
                                    
                                    <button 
                                        className="w-full bg-[#1F479A] rounded-xl py-2.5 text-white mt-4"
                                        type="button"
                                        onClick={handleNext}
                                    >
                                        Next
                                    </button>
                                </div>


                                </form>


                            </div>
                        </>
                    )

                case 2: 
                    return (
                        <>
                            {/* left side */}
                            <div
                                className={`w-[434px] h-full rounded-xl  bg-[#1F479A] px-6 py-8 flex flex-col justify-end`}
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

                            
                                {/* company signup form */}
                                <form className="mt-8 flex flex-col gap-4">

                                    {/* industry type */}
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm text-gray-600">Industry Type</label>
                                        <select
                                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[476px]"
                                            name="gender"
                                            value={formData.industryType}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled>
                                                Select Industry Type
                                            </option>
                                            <option value="logistics">Logistics</option>
                                            <option value="food-delivery">Food Delivery</option>
                                            <option value="tech">Tech</option>
                                        </select>
                                    </div>

                                    {/* headquarter location */}
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm text-gray-600">Where is your Headquarter Located?</label>
                                        <select
                                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[476px]"
                                            name="gender"
                                            value={formData.industryType}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled>
                                                Select Location
                                            </option>
                                            <option value="gurugram">Gurugram</option>
                                            <option value="bengaluru">Bengaluru</option>
                                            <option value="delhi">Delhi</option>
                                        </select>
                                    </div>

                                    {/* company size & year of establishment*/}
                                    <div className="flex gap-4">
                                        {/* phone number */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Company Size</span>
                                            <input 
                                                type="text" 
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                                placeholder="15"
                                            />
                                        </div>
                                        {/* date of birth */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Year of Establishment</span>
                                            <input 
                                                type="text" 
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                                placeholder="1987"
                                            />
                                        </div>
                                    </div>

                                    {/* buttons */}
                                    <div className="flex gap-4 w-[476px]">
                                        
                                        <button 
                                            className="w-full bg-gray-200 border border-gray-300 rounded-xl py-2.5 text-gray-600 mt-4"
                                            type="button"
                                            onClick={handlePrevious}
                                        >
                                            Previous
                                        </button>

                                        <button 
                                            className="w-full bg-[#1F479A] rounded-xl py-2.5 text-white mt-4"
                                            type="button"
                                            onClick={handleNext}
                                        >
                                            Next
                                        </button>
                                    </div>


                                </form>


                            </div>
                        </>
                    )

                case 3:
                    return (
                        <>
                            {/* left side */}
                            <div
                                className={`w-[434px] h-full rounded-xl  bg-[#1F479A] px-6 py-8 flex flex-col justify-end`}
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

                                {/* buttons */}
                                <div className="flex gap-4 w-[476px]">
                                    
                                    <button 
                                        className="w-full bg-[#1F479A] rounded-xl py-2.5 text-white mt-4"
                                        type="button"
                                        onClick={handleNext}
                                    >
                                        Next
                                    </button>
                                </div>


                                </form>


                            </div>
                        </>
                    )
            }
        }


    return (
        <div className="h-screen w-screen bg-[#EFF6FF] p-3 flex">
            {renderStep()}
        </div>
    );
};

export default CompanySignup;
