import React from 'react'
import Button from './Button'
export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-6'>
      <p className='text-base sm:text-xl md:text-2xl lg:text-3xl'>
        ENGINEER YOUR BODY
      </p>
      <h1 className='uppercase font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl '>Enormous<span className='text-blue-400'>Engineers</span></h1>
      </div>
      <p className='text-sm md:text-base font-light '>
      I hereby acknowledge my journey to engineer an <span className='text-blue-400 font-medium'> enormously big</span> and <span className='text-blue-400 font-medium'>mass-monstrous physique</span>, where science meets strength, and innovation shapes muscle. Join us at <span className='text-blue-400 font-medium'>EnormousEngineers</span> where engineers sculpt their bodies with precision and power!
      </p>
      <Button func={()=>{
        window.location.href ='#generate'
      }} text={"Accept & Begin"}></Button>
    </div>
  )
}
