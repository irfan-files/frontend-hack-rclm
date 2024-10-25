import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/46c9da29fc7e501a49ec7f4ba0edda3f7696cea174839431b83cf4f26f09715d?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22",
    title: "Connect Your YouTube Channel",
    description:
      "With just a few clicks, link your YouTube account to Creator Hub",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e33276290194c1fd9dd7ba6ae364c4f88e23d4aa16d6431fa16b3c90e62a19ab?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22",
    title: "Mint Your Proof of Ownership",
    description:
      "We generate an on-chain NFT (Non-Fungible Token) that serves as the official proof that you own the rights to your channel. This NFT is verifiable on blockchain explorers, ensuring authenticity.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/634ef5605c3f949a4ec42987a83e6cece22009daab2c0f969fde8d21f130a885?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22",
    title: "Claim Your Web3 Identity",
    description:
      "Once minted, your channel is tied to your Web3 wallet and can be accessed, managed, and traded across various platforms in the decentralized ecosystem.",
  },
];

const HowItWorks = () => {
  return (
    <section className="flex overflow-hidden flex-col px-16 py-28 bg-gray-950 max-md:px-5 max-md:py-24">
      <header className="flex flex-col self-center max-w-full text-4xl font-bold tracking-tighter leading-none text-center text-white uppercase w-[768px]">
        <h2 className="w-full max-md:max-w-full">HOW IT WORKS</h2>
      </header>
      <main className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default HowItWorks;
