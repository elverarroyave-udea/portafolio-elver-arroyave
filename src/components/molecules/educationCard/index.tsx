import React from 'react'

const Index = ({
    title = '', subTitle = '', text= ''
}: {title: string, subTitle: string, text: string}) => {
  return (
    <div className='flex flex-row bg-white h-[200px] p-1.5 ml-10 mr-10'>
        <div className="flex flex-col justify-start items-start basis-2/5 m-6 ml-10" >
            <h2 className='text-x1 font-bold text-center'>{title}</h2>
            <div className="flex flex-row justify-center items-center gap-2 mt-4">
                <p className='text-center text-gray-500'>Student</p>
                <div className='flex justify-center items-center bg-primary w-[111px] h-[18px]'>
                    <p className='text-[10px] text-center text-white'>Jan 1016 - Dec 2024</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-start items-start basis-3/5 mr-10">
            <h2 className='text-xl font-semibold text-center mt-4'>{subTitle}</h2>
            <p className='text-left text-gray-500 mt-2'>{text}</p>
        </div>
    </div>
  )
}

export default Index;