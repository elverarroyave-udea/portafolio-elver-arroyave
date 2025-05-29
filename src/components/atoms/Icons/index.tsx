import React from 'react';
import { Icon } from '@iconify/react';

const Index = ({ icon}: { icon: string; }) => {
  return (
    <div className='rounded-full w-20 h-20 flex justify-center items-center'>
      <Icon icon={`${icon}`} width='68' height='68' style={{ color: '#FFB400' }} className='text-white' />
    </div>
  );
};

export default Index;
