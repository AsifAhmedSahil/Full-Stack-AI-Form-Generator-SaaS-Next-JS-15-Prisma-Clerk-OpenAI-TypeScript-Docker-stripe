import HeroSection from '@/components/HeroSection'
import PricingSection from '@/components/PricingSection'
import React from 'react'

const HomePage = () => {
  return (
    <div className='grid items-center justify-items-center p-8 sm:p-20 min-h-screen gap-16'>
        <HeroSection/>
        <PricingSection/>
    </div>
  )
}

export default HomePage