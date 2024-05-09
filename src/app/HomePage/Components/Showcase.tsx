import React from 'react';
import Image from 'next/image';

// Define ProjectData type
interface ProjectData {
  id: number;
  image: any;
  title: string;
  text: string;
  link: string;
}

interface ShowcaseProps {
  projects: ProjectData[];
}

const Showcase: React.FC<ShowcaseProps> = ({ projects }) => {
  return (
    <div className='my-20'>
      <h1 className='text-3xl lg:text-5xl text-center my-20'>We provide you with our services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div className='space-y-3' key={project.id}>
            <Image src={project.image} height={200} width={500} alt='project' />
            <div className='w-1/2 mx-4'>
              <h3 className='text-2xl'>{project.title}</h3>
              <p className='text-sm'>{project.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
