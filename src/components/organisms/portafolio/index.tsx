import React from 'react'
import { Description } from '@/components/atoms/titles'
import Carousel from '@/components/molecules/Carousel'


const Index = () => {
  return (
    <div className="flex flex-col justify-start h-[815px] w-screen mt-20">
        <h1 className="text-2xl font-bold text-center">Portafolio</h1>
        <Description />
        <div className='flex justify-center items-center mt-10'>
          <Carousel />
        </div>
    </div>
  )
}

export default Index