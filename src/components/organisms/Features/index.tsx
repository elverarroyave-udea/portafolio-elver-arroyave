import React from 'react';
import Card from '@/components/molecules/knowledgeCard';

const features = [
  {
    title: 'Web development',
    text: 'blog, e-commerce.',
    icon: 'material-symbols-light:screenshot-monitor-outline',
  },
  {
    title: 'UI/UX design',
    text: 'Mobile app, website design.',
    icon: 'material-symbols-light:mobile-layout-outline',
  },
  {
    title: 'Sound design',
    text: 'Voice Over, Beat Making.',
    icon: 'material-symbols-light:sound-detection-loud-sound-outline',
  },
  {
    title: 'Game design',
    text: 'Character Design, Props & Objects.',
    icon: 'material-symbols-light:videogame-asset-outline',
  },
  {
    title: 'Photography',
    text: 'Portrait, Product Photography.',
    icon: 'material-symbols-light:photo-camera-outline',
  },
  {
    title: 'Advertising',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ',
    icon: 'material-symbols-light:release-alert-outline',
  },
];

const Index = () => {
  return (
    <div className='flex flex-wrap justify-center gap-5 mt-5'>
      {features.map((feature) => (
        <Card key={feature.title} title={feature.title} text={feature.text} icon={feature.icon} />
      ))}
    </div>
  );
};

export default Index;
