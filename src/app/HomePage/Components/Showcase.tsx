import React from 'react';
import Project1 from '../../../../public/Rectangle 768.png'
import Project2 from '../../../../public/Rectangle 769.png'
import Project3 from '../../../../public/Rectangle 770.png'
import Project4 from '../../../../public/Rectangle 771.png'
import Project5 from '../../../../public/Rectangle 772.png'
import Project6 from '../../../../public/Rectangle 773.png'
import Image, { StaticImageData } from 'next/image';

export interface ProjectData {
    id: number;
    image: any;
    title: string;
    text: string;
    link: string;
  }

  interface ShowcaseProps {
    showcase: ProjectData[];
  }
  const Showcase: React.FC<ShowcaseProps> = () => {
    return (
      <div className='my-20'>
        <h1 className='text-5xl text-center my-20'>We provide you with our services</h1>
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


const projects: ProjectData[] = [
    {
      id: 1,
      image: Project1,
      title: 'E-commerce Website',
      text: 'They built a stunning e-commerce website that boosted our online sales significantly.',
      link: 'https://example.com/ecommerce-website-testimonial'
    },
    {
      id: 2,
      image: Project2,
      title: 'Portfolio Website',
      text: 'Their team created a sleek portfolio website that perfectly showcased my work.',
      link: 'https://example.com/portfolio-website-testimonial'
    },
    {
      id: 3,
      image: Project3,
      title: 'Corporate Website',
      text: 'We were impressed by the professional design and functionality of our new corporate website.',
      link: 'https://example.com/corporate-website-testimonial'
    },
    {
      id: 4,
      image: Project4,
      title: 'Custom Web Application',
      text: 'They developed a custom web application that streamlined our business processes.',
      link: 'https://example.com/custom-web-app-testimonial'
    },
    {
      id: 5,
      image: Project5,
      title: 'Blog Website',
      text: 'Their team delivered a beautifully designed blog website that exceeded our expectations.',
      link: 'https://example.com/blog-website-testimonial'
    },
    {
      id: 6,
      image: Project6,
      title: 'Educational Platform',
      text: 'We were impressed by the user-friendly interface and advanced features of our new educational platform.',
      link: 'https://example.com/educational-platform-testimonial'
    }
  ];