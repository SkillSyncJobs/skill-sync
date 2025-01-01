import React from 'react'
import GraduateCapIcon from '../../assets/graduate-cap-icon.svg'
import CompanyIcon from '../../assets/company.svg'
import CheckIcon from '../../assets/check-icon.svg'
import CompanyImage from '../../assets/company-image.png'
import StudentImage from '../../assets/student-image.png'

const Benefits = () => {
  return (
    <div className='w-full h-rel pt-[280px] pb-[150px] flex flex-col gap-[186px]'>

        {/* student benifits */}
        <div className='flex gap-16 justify-center items-center'>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-2 items-center'>
                    <img src={GraduateCapIcon} alt="" />
                    <p className='text-[#015FFE] font-semibold'>Are you a Student?</p>
                </div>
                <h1 className='text-[31px] text-gray-900 font-semibold -mt-4'>Launch Your Career with Confidence</h1>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <img src={CheckIcon} alt="" />
                        <p className='text-gray-600'>Personalized skill development paths</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={CheckIcon} alt="" />
                        <p className='text-gray-600'>Industry-recognized certifications</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={CheckIcon} alt="" />
                        <p className='text-gray-600'>Al-powered job matching</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={CheckIcon} alt="" />
                        <p className='text-gray-600'>Career mentorship and guidance</p>
                    </div>
                </div>
            </div>
            <div >
                <img src={StudentImage} alt="" />
            </div>
        </div>

        {/* company benefits */}
        <div className='flex gap-16 justify-center items-center -ml-28'>
            <div>
                <img className='h-full w-full' src={CompanyImage} alt="" />
            </div> 
             
            <div className='flex flex-col gap-8'>
                <div className='flex gap-2 items-center'>
                    <img src={CompanyIcon} alt="" />
                    <p className='text-[#015FFE] font-semibold'>Are you a Company?</p>
                </div>
                <h1 className='text-[31px] text-gray-900 font-semibold -mt-4'>Streamline Your Hiring Process</h1>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <img src={CheckIcon} alt="" />
                        <p className='text-gray-600'>Access pre-assessed, job-ready candidates</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={CheckIcon} alt="" />
                        <p className='text-gray-600'>Advanced filtering and matching</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={CheckIcon} alt="" />
                        <p className='text-gray-600'>Automated recruitment workflow</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={CheckIcon} alt="" />
                        <p className='text-gray-600'>Real-time analytics and insights</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Benefits