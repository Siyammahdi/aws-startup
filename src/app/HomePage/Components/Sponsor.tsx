import Image from 'next/image';
import React from 'react';

const Sponsor = () => {
    return (
        <div className='py-28'>
            <h3 className='text-3xl font-bold'>Home to over 280,000 startups globally</h3>
            <p className='text-base md:text-xl w-full md:w-2/3 leading-relaxed py-5'>For over 15 years, AWS has helped more startups launch, build, and succeed than any other cloud provider. Since launching in 2013, AWS Activate has provided $6 billion (USD) in AWS Promotional Credits to startups globally.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-0 items-center justify-between py-10'>
                <Image src={"/8lk2uoxu2-logo-1(1).png"} alt='img' width={80} height={20}/>
                <Image src={"/wiz.png"} alt='img' width={100} height={50}/>
                <Image src={"/stripe.png"} alt='img' width={100} height={50}/>
                <Image src={"/ruppi.png"} alt='img' width={100} height={50}/>
                <Image src={"/perplexity.png"} alt='img' width={100} height={50}/>
                <Image src={"/hugging.png"} alt='img' width={100} height={50}/>
            </div>
        </div>
    );
};

export default Sponsor;