import React from 'react'
import MainCard from '@/components/molecules/mainCard';
import MyKnowledge from '@/components/organisms/myKnewledge';
import Educations from '@/components/organisms/education';
import Portafolio from '@/components/organisms/portafolio';
import Footer from '@/components/organisms/footer';

export const Home = () => {
  return (
    <div className='flex flex-col bg-[#F0F0F6]'>
      <MainCard />
      <MyKnowledge />
      <Educations />
      <Portafolio />
      <Footer text="Footer Content" />
    </div>
  )
}

export default Home;
