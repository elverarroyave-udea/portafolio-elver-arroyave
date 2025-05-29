import React from 'react';

const MainTitle = () => {
  return (
    <div className='w-[500px] h-[118px]'>
        <h2 className='text-5xl font-bold text-gray-900'>
        I am Elver Arroyave
        <span className='text-primary'> Front-end</span> Developer
        </h2>
    </div>
  );
};

const DescriptionMain = () => {
  return (
    <div className='w-full h-[88px] mt-[10px] flex justify-start items-center mb-5'>
        <p className='w-[438px] text-gris'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
        </p>
    </div>
  );
};

const Description = () => {
  return (
    <div className='w-full h-[88px] mt-[10px] flex justify-center items-center mb-5'>
        <p className='w-[438px] text-gris text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
        </p>
    </div>
  );
};

const SubTitle = ({ title }: { title: string }) => {
  return (
    <h3 className='text-center lg:text-left text-xl lg:text-[24px] font-sans text-black '>
      {title}
    </h3>
  );
};
const TextTitle = ({ text }: { text: string }) => {
  return (
    <h3 className='text-center lg:text-left text-xl lg:text-[16px] font-light text-black '>
      {text}
    </h3>
  );
};
const SubText = ({ text }: { text: string }) => {
  return (
    <div>
      <p className='text-base text-gris font-light text-center lg:text-left max-w-72 lg:max-w-72'>
        {text ??
          'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.'}
      </p>
    </div>
  );
};

export { MainTitle, DescriptionMain, Description, SubTitle, TextTitle, SubText };
