import React from 'react'
import Icon from '@/components/atoms/Icons'
import { SubTitle, SubText } from '@/components/atoms/titles'

const Index = ({
  title = '',
  text = '',
  icon = 'material-symbols:add-card-outline',
}: {
  title: string;
  text: string;
  icon: string;
}) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-[310px] h-[255px] bg-white'>
        <Icon icon={icon} />
        <SubTitle title={title} />
        <SubText text={text} />
      </div>
    </div>
  );
};
export default Index