import React from 'react'
import MainCard from '@/components/molecules/mainCard';
import MyKnowledge from '@/components/organisms/myKnewledge';
import Educations from '@/components/organisms/education';
import Portafolio from '@/components/organisms/portafolio';
import Footer from '@/components/organisms/footer';
import Profile from '@/components/organisms/Profile';
import PersonalData from '@/components/organisms/personalData'
import Languages from '@/components/organisms/Languages'
import ProgramingLanguages from '@/components/organisms/ProgrammingLanguages'
import ExtraActivities from '@/components/organisms/ExtraActivities'
import Links from '@/components/organisms/Links'

export const Home = () => {
  return (
    <div className='grid grid-cols-[20%_75%_5%] min-h-screen bg-[#F0F0F6]'>
      <div className='flex flex-col bg-white h-full'>
        <Profile />
        <PersonalData />
        <Languages />
        <ProgramingLanguages />
        <ExtraActivities />
      </div>
      <div className='flex flex-col'>
        <MainCard />
        <MyKnowledge />
        <Educations />
        <Portafolio />
        <Footer text="Footer Content" />
      </div>
      <div className='flex flex-col bg-white h-full'>
        <Links/>
      </div>
    </div>
  )
}

export default Home;
