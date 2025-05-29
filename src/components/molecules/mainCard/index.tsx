import React from 'react'
import ButtonSquad  from '@/components/atoms/Buttons/Squad';
import {MainTitle, DescriptionMain} from '@/components/atoms/titles';
import MainPhoto from '@/components/atoms/mainPhoto';


const Index = () => {
  return (
    <div className='flex justify-between h-[467px] m-10 p-10 bg-white'>
            <div className='flex flex-col justify-center items-start gap-5 ml-10'>
                <MainTitle />
                <DescriptionMain />
                <ButtonSquad />
            </div>
            <div className='-m-10'>
                <MainPhoto />
            </div>
    </div>
  )
}

export default Index