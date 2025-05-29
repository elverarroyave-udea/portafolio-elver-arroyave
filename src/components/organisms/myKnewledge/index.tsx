import React from 'react'
import {Description} from '@/components/atoms/titles';
import Features from '@/components/organisms/Features';

const Index = () => {
  return (
    <div className="flex flex-col justify-start h-[653px] w-full mt-5">
        <h1 className="text-2xl font-bold text-center">My Knowledge</h1>
        <Description />
        <Features />
    </div>
  )
}

export default Index