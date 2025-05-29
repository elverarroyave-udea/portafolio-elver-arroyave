import React from 'react'
import Image from 'next/image';
import {TextTitle} from '@/components/atoms/titles'
import cardPhoto from '@/components/assets/cardPhoto.jpg';

interface BlogCardProps {
  title: string
  description: string
}

const Index = ({ title, description}: BlogCardProps) => {
  return (
    <div>
      <div>
        <div className='flex flex-col items-center justify-center w-[255px] h-[400px] bg-white rounded-lg shadow-lg'>
          <div className='relative w-[255px] h-[200px]'>
            <Image src={cardPhoto} alt={title} layout='fill'/>
          </div>
          <div className='flex flex-col items-start justify-center w-full h-1/2 p-4 gap-2'>
            <TextTitle text={title} />
            <p className='text-[13px] text-gris font-light h-[72px] text-ellipsis overflow-hidden'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;