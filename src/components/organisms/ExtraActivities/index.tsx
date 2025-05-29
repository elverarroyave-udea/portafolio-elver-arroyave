import React from 'react'
import { SubTitle } from '@/components/atoms/titles'

const Index = () => {
  return (
        <div className="flex flex-col justify-start items-center mt-10">
        <SubTitle title="Extra Activities"/>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3 mt-2.5">
            <p>Bootstrap. Materilize</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3">
            <p>Stylus, Sass, Less</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3">
            <p>Gulp, Webpack, Grunt</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-3">
            <p>Git Knowledge</p>
        </div>
    </div>
  )
}

export default Index