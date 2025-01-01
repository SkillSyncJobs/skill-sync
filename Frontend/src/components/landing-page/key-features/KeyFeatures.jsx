import React from 'react'
import FeatureCard from './FeatureCard'
import Feature1 from '../../../assets/feature-1.svg'
import Feature2 from '../../../assets/feature-2.svg'
import Feature3 from '../../../assets/feature-3.svg'

const KeyFeatures = () => {
  return (
    <div>
        <div className="absolute w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EFF6FF" fill-opacity="1" d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </div>

        <div className=' w-full bg-primary pt-[142px] pb-[122px] flex flex-col items-center gap-20'>
            <h1 className='text-[39px] text-white font-bold'>Why Choose SkillSync</h1>

            <div className='flex gap-8'>
              <FeatureCard icon={Feature1} feature="Personalized Learning Paths" description="Al-driven skill development tailored to industry demands and your career goals."/>
              <FeatureCard icon={Feature2} feature="Smart Matching" description="Advanced algorithms connect the right talent with the right opportunities."/>
              <FeatureCard icon={Feature3} feature="Real-time Analytics" description="Data-driven insights to track progress and optimize hiring decisions."/>
            </div>

        </div>
        
        <div className='-mt-[60px]'>
          <div className="absolute w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#015FFE" fill-opacity="1" d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
          </div>
      </div>




    </div>
  )
}

export default KeyFeatures