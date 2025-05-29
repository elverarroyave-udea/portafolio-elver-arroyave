import React from 'react'

const Index = () => {
  return (
    <div className="flex flex-col jutify-center items-center">
        <div className="flex justify-between w-full pl-15 pr-15 pb-1">
            <p>Age:</p>
            <p>28</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-1">
            <p>Residendce:</p>
            <p>Caucasia</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-1">
            <p>Freelance:</p>
            <p className="text-green-300">Available</p>
        </div>
        <div className="flex justify-between w-full pl-15 pr-15 pb-1">
            <p>Address:</p>
            <p>Caucasia</p>
        </div>
    </div>
  )
}

export default Index