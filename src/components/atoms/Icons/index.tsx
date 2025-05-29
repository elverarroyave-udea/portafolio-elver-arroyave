import React from 'react';
import { Icon } from '@iconify/react';
interface IconCircleProps {
  icon: string
  w?: number
  h?: number
}

const Index = ({ icon, w = 48, h = 48 }: IconCircleProps) => {
  return (
    <div className='rounded-full w-20 h-20 flex justify-center items-center'>
      <Icon icon={`${icon}`} width={w} height={h} style={{ color: '#FFB400' }} className='text-white' />
    </div>
  );
};

export default Index;
