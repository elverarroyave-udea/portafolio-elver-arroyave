import React from 'react'
import { SubTitle } from '@/components/atoms/titles'

const Index = () => {
  return (
    <div className="flex flex-col jutify-center items-center mt-10">
        <SubTitle title="Languages"></SubTitle>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3 mt-2.5">
            <p>Spanish:</p>
            <p>100%</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3">
            <p>English:</p>
            <p>70%</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3">
            <p>Franch:</p>
            <p>40%</p>
        </div>
    </div>
  )
}

export default Index