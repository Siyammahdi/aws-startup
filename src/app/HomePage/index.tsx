import React from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Sponsor from "./Components/Sponsor";
import About from "./Components/About";
import Credit from "./Components/Credit";
import Footer from "./Components/Footer";
import Stepper from "./Components/Stepper";
import Showcase from "./Components/Showcase";
import Contact from "./Components/Contact";
import Tastimonials from "./Components/Tastimonials";
import Project1 from '../../../public/Rectangle 768.png';
import Project2 from '../../../public/Rectangle 769.png';
import Project3 from '../../../public/Rectangle 770.png';
import Project4 from '../../../public/Rectangle 771.png';
import Project5 from '../../../public/Rectangle 772.png';
import Project6 from '../../../public/Rectangle 773.png';
import Testimonials from "./Components/Testimonials/Testimonials";

interface ProjectData {
  id: number;
  image: any;
  title: string;
  text: string;
  link: string;
}

const HomePage = () => {

  return (
    <div>
      <div className="max-w-7xl mx-auto lg:px-0 md:px-16 px-5 ">
        <Header />
        <Hero />
        <Sponsor />
        <About />
        <Tastimonials />
        {/* <Testimonials /> */}
        <Credit />
        <Stepper />
        <Showcase projects={projects} /> 
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;


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
