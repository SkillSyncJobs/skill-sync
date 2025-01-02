import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"
import { ArrowLeft, Building2, GraduationCap } from "lucide-react";
import Select from 'react-select'


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
                    if (!formData.companyName || 
                        !formData.companyPhoneNumber || 
                        !formData.companyEmail || 
                        !formData.password || 
                        !formData.confirmPassword) {
                        toast.error("Please fill all required fields");
                        return false;
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (formData.companyEmail && !emailRegex.test(formData.companyEmail)) {
                        toast.error("Please enter a valid email address");
                        return false;
                    }
                    if (formData.password !== formData.confirmPassword) {
                        toast.error("Passwords do not match");
                        return false;
                    }
                    return true;
                } 
                case 2: {
                    if (!formData.industryType || 
                        !formData.headquarterLocation || 
                        !formData.companySize || 
                        !formData.yearOfEstablishment) {
                        toast.error("Please fill all company details");
                        return false;
                    }
                    return true;
                } 
                case 3: {
                    if (!formData.pointOfContactFirstName || 
                        !formData.pointOfContactLastName || 
                        !formData.pointOfContactDesignation || 
                        !formData.pointOfContactEmail || 
                        !formData.pointOfContactPhoneNumber) {
                        toast.error("Please fill all point of contact details");
                        return false;
                    }
                    return true;
                } 
                case 4: {
                    if (!formData.jobRoles || 
                        !formData.areasOfExpertiseSought) {
                        toast.error("Please specify job roles and areas of expertise");
                        return false;
                    }
                    return true;
                } 
                case 5: {
                    if (!formData.companyLogo) {
                        toast.error("Please upload company logo");
                        return false;
                    }
                    return true;
                } 
                case 6: {
                    if (!formData.companyWebsite || 
                        !formData.linkedInProfile) {
                        toast.error("Please provide company website and LinkedIn profile");
                        return false;
                    }
                    return true;
                } 
                default: {
                    return true;
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
                // basic company info
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
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                            placeholder="SkillSync"
                                        />
                                    </div>
                                    {/* company phone number */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-gray-600">Company Phone Number</span>
                                        <input 
                                            type="text" 
                                            name="companyPhoneNumber"
                                            value={formData.companyPhoneNumber}
                                            onChange={handleInputChange}
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
                                            name="companyEmail"
                                            value={formData.companyEmail}
                                            onChange={handleInputChange}
                                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[476px]"
                                            placeholder="example@skillsyncjob.com"
                                        />
                                    </div>
                                </div>

                                {/* password */}
                                <div className="flex gap-4">
                                    {/* password */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-gray-600">Password</span>
                                        <input 
                                            type="password" 
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    {/* confirm password */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-gray-600">Confirm Password</span>
                                        <input 
                                            type="password" 
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
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
                
                // industry type
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
                                            name="industryType"
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
                                            name="headquarterLocation"
                                            value={formData.headquarterLocation}
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
                                        {/* company size */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Company Size</span>
                                            <input 
                                                type="text" 
                                                name="companySize"
                                                value={formData.companySize}
                                                onChange={handleInputChange}
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                                placeholder="15"
                                            />
                                        </div>
                                        {/* year of establishment */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Year of Establishment</span>
                                            <input 
                                                type="text" 
                                                name="yearOfEstablishment"
                                                value={formData.yearOfEstablishment}
                                                onChange={handleInputChange}
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
                
                // point of contact information
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

                            
                                {/* company signup form */}
                                <form className="mt-8 flex flex-col gap-4">

                                    {/* point of contact first name & last name*/}
                                    <div className="flex gap-4">
                                        {/* first name */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">First Name</span>
                                            <input 
                                                type="text" 
                                                name="pointOfContactFirstName"
                                                value={formData.pointOfContactFirstName}
                                                onChange={handleInputChange}
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                                placeholder="John"
                                            />
                                        </div>
                                        {/* date of birth */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Last Name</span>
                                            <input 
                                                type="text" 
                                                name="pointOfContactLastName"
                                                value={formData.pointOfContactLastName}
                                                onChange={handleInputChange}
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* point of contact designation */}
                                    <div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Designation</span>
                                            <input 
                                                type="email" 
                                                name="pointOfContactDesignation"
                                                value={formData.pointOfContactDesignation}
                                                onChange={handleInputChange}
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[476px]"
                                                placeholder="Business Analyst"
                                            />
                                        </div>
                                    </div>

                                    {/* point of contact email and phone number */}
                                    <div className="flex gap-4">
                                        {/* email */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Email Address</span>
                                            <input 
                                                type="text" 
                                                name="pointOfContactEmail"
                                                value={formData.pointOfContactEmail}
                                                onChange={handleInputChange}
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                                placeholder="johndoe@company.com"
                                            />
                                        </div>
                                        {/* phone number */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Phone Number</span>
                                            <input 
                                                type="text" 
                                                name="pointOfContactPhoneNumber"
                                                value={formData.pointOfContactPhoneNumber}
                                                onChange={handleInputChange}
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

                // job posting preferences
                case 4:

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
                                            name="industryType"
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
                                            name="headquarterLocation"
                                            value={formData.headquarterLocation}
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

                // company logo
                case 5: 
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
                                            name="industryType"
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
                                            name="headquarterLocation"
                                            value={formData.headquarterLocation}
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
                                        {/* company size */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Company Size</span>
                                            <input 
                                                type="text" 
                                                name="companySize"
                                                value={formData.companySize}
                                                onChange={handleInputChange}
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                                placeholder="15"
                                            />
                                        </div>
                                        {/* year of establishment */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Year of Establishment</span>
                                            <input 
                                                type="text" 
                                                name="yearOfEstablishment"
                                                value={formData.yearOfEstablishment}
                                                onChange={handleInputChange}
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

                // additional information
                case 6:
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
                                            name="industryType"
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
                                            name="headquarterLocation"
                                            value={formData.headquarterLocation}
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
                                        {/* company size */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Company Size</span>
                                            <input 
                                                type="text" 
                                                name="companySize"
                                                value={formData.companySize}
                                                onChange={handleInputChange}
                                                className="px-4 py-2 rounded-xl border border-[#BCC3D0] w-[232px]"
                                                placeholder="15"
                                            />
                                        </div>
                                        {/* year of establishment */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">Year of Establishment</span>
                                            <input 
                                                type="text" 
                                                name="yearOfEstablishment"
                                                value={formData.yearOfEstablishment}
                                                onChange={handleInputChange}
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

            }
        }


    return (
        <div className="h-screen w-screen bg-[#EFF6FF] p-3 flex">
            
            {renderStep()}
        </div>
    );
};

export default CompanySignup;
