import React from 'react'
import TestimonalCard from './TestimonalCard'
import ProfilePicture1 from '../../../assets/pfp1.svg'
import ProfilePicture2 from '../../../assets/pfp2.svg'
import ProfilePicture3 from '../../../assets/pfp3.svg'
import ProfilePicture4 from '../../../assets/pfp4.svg'

const Testimonials = () => {
  return (

    <>
    <div className="absolute w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EFF6FF" fill-opacity="1" d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </div>
    
    <div className='h-rel w-full bg-primary pt-[104px] pb-[320px] flex flex-col items-center gap-24'>
      <div className='flex flex-col items-center mt-12'>
          <h1 className='text-[39px] text-white font-bold'>Success Stories</h1>
          <p className='text-xl text-white mt-4'>Hear how SkillSync transformed their career paths.</p>
      </div>
        <div className='flex gap-8'>
          <TestimonalCard image={ProfilePicture1} text="SkillSync helped me land my dream job faster than I imagined!" name="Kamlesh Mishra" designation="Business Analyst, TCS"/>
          <TestimonalCard image={ProfilePicture2} text="The courses are practical and directly applicable to my job!" name="Ujjwal Nigam" designation="Digital Marketing Manager, Google"/>
          <TestimonalCard image={ProfilePicture3} text="I gained skills that made me more competitive in the job market" name="Om Rohilla" designation="Business Analyst, Amazon"/>
          <TestimonalCard image={ProfilePicture4} text="I gained competitive skills that impressed top employers!" name="Jasnoor Kaur" designation="Marketing Analyst, KPMG"/>
        </div>
    </div>
    </>
  )
}

export default Testimonials