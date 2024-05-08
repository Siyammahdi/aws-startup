import React from 'react';
import bgImage from '../../../../public/image 11.png'

const Contact: React.FC = () => {

    const btn: string = "Let's talk";

    return (
        <div className='bg-[#005BBB] flex justify-center py-10 rounded-xl items-center text-white my-20' style={{backgroundImage: `url(${bgImage})`}} >
            <div className='space-y-10'>
                <h2 className='text-5xl w-1/3  text-white'>Let’s start a project ?</h2>
                <p className='w-2/3 text-sm'>Lets discuss about your offshore project. We can Help you by our skillful Global team. You can take a free counciling by taking a schedule.</p>
            </div>
            <div>
                <button className='border-2 px-12 py-2 rounded-full'>{btn}</button>
            </div>
        </div>
    );
};

export default Contact;
