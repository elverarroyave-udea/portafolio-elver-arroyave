import React from 'react'
import CircularIconButton from '@/components/atoms/CircularIconButton'
import { SubTitle } from '@/components/atoms/titles'


const Index = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <SubTitle title="Links"/>
        <CircularIconButton icon='tabler:brand-facebook'/>
        <CircularIconButton icon='tabler:brand-instagram'/>
        <CircularIconButton icon='tabler:brand-twitter'/>
        <CircularIconButton icon='tabler:brand-linkedin'/>
        <CircularIconButton icon='tabler:brand-youtube'/>
        <CircularIconButton icon='tabler:brand-dribbble'/>
    </div>
  )
}

export default Index