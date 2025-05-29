import React from 'react'

const Index = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-[60px] w-screen">
        <p>{text}</p>
    </div>
  )
}

export default Index;