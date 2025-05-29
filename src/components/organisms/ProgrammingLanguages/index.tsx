import React from 'react'
import { SubTitle } from '@/components/atoms/titles'


const index = () => {
  return (
    <div className="flex flex-col jutify-center items-center mt-10">
        <SubTitle title="Programming Languages"></SubTitle>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3 mt-2.5">
            <p>Java:</p>
            <p>90%</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3">
            <p>Python:</p>
            <p>70%</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3">
            <p>C:</p>
            <p>80%</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3">
            <p>Java Script:</p>
            <p>80%</p>
        </div>
    </div>
  )
}

export default index