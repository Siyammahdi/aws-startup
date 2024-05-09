import Image from "next/image";
import React from "react";

const Credit = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center shadow-2xl rounded-2xl overflow-hidden my-36">
      <div className="lg:w-1/2 ">
        <Image src={"/credit.jpg"} alt="credit" width={900} height={500} />
      </div>
      <div className="lg:w-1/2 ">
        <div className="px-10 py-10 lg:py-0 space-y-5">
          <h3 className="text-xl lg:text-3xl font-bold">
            Easiest way to build with leading foundation models
          </h3>
          <p className="text-sm lg:text-xl leading-relaxed">
            AWS Activate credits are redeemable on third-party models on Amazon
            Bedrock, our fully-managed service that offers a choice of
            high-performing foundation models (FMs) from leading AI companies,
            like AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI,
            and Amazon via a single API.
          </p>
          <button className="bg-button text-white px-6 py-4 rounded-full text-sm font-bold">
            Apply for Credits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credit;
