import Image from "next/image";
import React from "react";
import Accordion from "./Accordion";

const Stepper = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Support at every stage</h3>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-2/3">
          <div className="p-4">
            <Accordion items={items} />
          </div>
        </div>
        <div className="lg:w-2/3">
          <Image src={"/step1.png"} alt="step" width={700} height={100} />
          <div className="flex justify-center mb-20">
            <button className="bg-button text-white px-6 py-3 rounded-full text-sm font-bold">
              Learn
            </button>
          </div>
          <Image src={"/step2.png"} alt="step" width={700} height={100} />
          <div className="flex justify-center mt-20">
            <button className="bg-button text-white px-6 py-3 rounded-full text-sm font-bold">
              Join now
            </button>
          </div>
          <Image src={"/step3.png"} alt="step" width={700} height={100} />
          <div className="flex justify-center mb-20">
            <button className="bg-button text-white px-6 py-3 rounded-full text-sm font-bold">
              Get started
            </button>
          </div>
          <Image src={"/step4.png"} alt="step" width={700} height={100} />
          <div className="flex justify-center mb-20">
            <button className="bg-button text-white px-6 py-3 rounded-full text-sm font-bold">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;



const items = [
    {
        id: 1,
        title: 'Turn your idea into a business',
        content: 'You have a big idea that solves a problem. But thats just the start. Learn the fundamentals of turning your idea into a successful startup. Explore articles, videos, and more built for early-stage startups, from new to experienced AWS users.',
    },
    {
        id: 2,
        title: 'Build your minimum viable',
        content: 'Once youre ready to start building, choose from dozens of battle-tested templates, sample code or extend your runway with access to credits and exclusive third-party offers.',
    },
    {
        id: 3,
        title: 'Extend your reach',
        content: 'Amplify your product and connect with potential investors or customers by listing your company on Showcase.',
    },
    {
        id: 4,
        title: 'Find product market fit',
        content: 'Apply for access to facilitated learning, hands-on business and technical mentorship, and connections to the broader Amazon network and our community of investors through AWS global accelerators programs.'
    },
  ];