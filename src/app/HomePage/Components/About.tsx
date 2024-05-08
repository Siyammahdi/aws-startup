import Image from "next/image";
import React from "react";
import Image1 from "../../../../public/1.png";
import Image2 from "../../../../public/2.png"
import Image3 from "../../../../public/3.png"
import Image4 from "../../../../public/4.png"
import Image5 from "../../../../public/5.png"
import Image6 from "../../../../public/6.png"

const About = () => {
  return (
    <div >
              <h3 className="text-5xl text-center py-20">our service</h3>
      <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/4">

        <p className="font-semibold text-3xl leading-relaxed py-10">
        Innovation powered by Uqiflow 
        </p>
      </div>
      <div className="lg:w-3/4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {fakeData.map((data) => (
            <div className="space-y-3" key={data.id}>
              <Image src={data.image} alt="image" height={40} width={60} />
              <h2 className="text-xl font-semibold">{data.title}</h2>
              <p className="text-sm">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;

const fakeData = [
  {
    id: "001",
    image: Image1,
    title: "Mountain Retreat",
    text: "Escape to the tranquility of the mountains, where fresh air fills your lungs and majestic peaks tower above. Hike through lush forests, listen to the melody of babbling brooks, and recharge your spirit in nature's embrace.",
  },
  {
    id: "002",
    image: Image2,
    title: "Coastal Paradise",
    text: "Sink your toes into warm sands and let the gentle rhythm of the waves soothe your soul. Discover hidden coves, explore tide pools teeming with life, and watch the sunset paint the sky in hues of orange and pink.",
  },
  {
    id: "003",
    image: Image3,
    title: "City Lights",
    text: "Immerse yourself in the vibrant energy of the city, where skyscrapers reach for the stars and streets buzz with life. Indulge in world-class cuisine, catch a show on Broadway, and experience the endless possibilities of urban living.",
  },
  {
    id: "004",
    image: Image4,
    title: "Desert Dreams",
    text: "Surrender to the allure of the desert, where endless horizons stretch before you and the silence speaks volumes. Trek across rolling dunes, camp beneath a blanket of stars, and witness the magic of sunrise over the sands.",
  },
  {
    id: "005",
    image: Image5,
    title: "Historic Charms",
    text: "Step back in time and uncover the rich tapestry of history woven into the fabric of ancient cities. Wander through cobblestone streets, marvel at grand cathedrals, and immerse yourself in the stories of civilizations long past.",
  },
  {
    id: "006",
    image: Image6,
    title: "Tropical Paradise",
    text: "Bask in the warmth of the tropics, where palm-fringed beaches beckon and crystal-clear waters invite you to dive in. Snorkel among vibrant coral reefs, sip coconut water under the shade of a swaying palm, and let the rhythm of island life wash over you.",
  },
];
