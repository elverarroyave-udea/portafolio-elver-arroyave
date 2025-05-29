import React from 'react'
import Image from 'next/image'
import profilePhoto from '@/components/assets/image.png' // Ajusta la ruta según tu proyecto

const Index = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-5 p-10'>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
        <Image
          src={profilePhoto}
          alt="Profile Photo"
          width={128}
          height={128}
          objectFit="cover"
        />
      </div>
      <p className="text-center text-gray-700 font-medium w-32">Elver Arroyave</p>
      <p className="text-center text-gray-500 text-sm">Frontend Developer</p>
    </div>
  )
}

export default Index