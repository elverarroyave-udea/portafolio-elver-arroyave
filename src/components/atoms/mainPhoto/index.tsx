import React from 'react'
import Image from 'next/image'
import mainPhoto from '@/components/assets/image.png';

const Index = () => {
  return (
    <div className="relative w-[325px] h-[100%] mr-[50px]">
        <Image
          src={mainPhoto}
          alt="Main Photo"
          layout="fill"
          objectFit="cover"
        />
    </div>
  )
}

export default Index