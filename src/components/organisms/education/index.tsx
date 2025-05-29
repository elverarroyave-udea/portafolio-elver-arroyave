import React from 'react'
import { Description } from '@/components/atoms/titles'
import Certificates from '@/components/organisms/certificates'

const Index = () => {
  return (
    <div className="flex flex-col justify-start h-[700px] w-screen mt-20">
        <h1 className="text-2xl font-bold text-center">Education</h1>
        <Description />
        <Certificates />
    </div>
  )
}

export default Index