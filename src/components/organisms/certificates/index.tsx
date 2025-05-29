import React from 'react'
import EducationCard from '@/components/molecules/educationCard';

const certificates = [
    {
        title: 'University of Toronto',
        subTitle: 'Cerficate of web Trainig',
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
        title: 'Programing Course',
        subTitle: 'Cerficate of web Trainig',
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
        title: 'Web Developer Courses',
        subTitle: 'Cerficate of web Trainig',
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
]

const Index = () => {
  return (
    <div className="flex flex-col divide-y divide-gray-300">
            {certificates.map((certificate) => (
                <EducationCard 
                    title={certificate.title} 
                    subTitle={certificate.subTitle} 
                    text={certificate.Text} 
                    key={certificate.title}
                />
            ))}
    </div>
  )
}

export default Index