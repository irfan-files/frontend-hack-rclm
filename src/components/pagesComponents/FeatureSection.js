import React from "react";
import FeatureTab from "./FeatureTab";

const featureData = [
  {
    title: "Creators Seeking Ownership in Web3",
    description:
      "Harness Web3 to gain true ownership of your content. Protect your intellectual property and ensure fair compensation for your creativity.",
  },
  {
    title: "Creators Exploring New Revenue Opportunities",
    description:
      "Discover new ways to monetize your content in a decentralized world. Engage your audience with exclusive experiences and build a loyal community.",
  },
  {
    title: "Crypto-Curious YouTubers Ready for Web3",
    description:
      "If you're a YouTuber exploring crypto, now's the time to dive into Web3. Leverage blockchain technology to enhance your content and connect with your audience like never before.",
  },
];

function FeatureSection() {
  return (
    <section className="flex overflow-hidden flex-col gap-16 justify-center items-center py-24 text-white border-t-indigo-700">
      <div className="flex flex-col max-w-full w-[1280px]">
        <article className="flex flex-wrap gap-10 items-center px-8 w-full max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b42b38d4f5b4f85e335dfb537f076c109a0ff581b5e2e092ad22e8a96366a82?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
            alt="Feature illustration"
            className="object-contain self-stretch my-auto aspect-[0.82] min-w-[240px] w-[520px] max-md:max-w-full"
          />
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <header className="flex flex-col w-full max-md:max-w-full">
              <h2 className="w-full text-4xl font-bold tracking-tighter leading-none uppercase max-md:max-w-full">
                Why Creator Hub?
              </h2>
              <p className="mt-5 text-xl leading-8 max-md:max-w-full">
                Our platform is designed for YouTube creators looking to grow
                their presence beyond Web2. Whether you're just starting or
                already have a loyal fanbase, Web3 offers new ways to interact,
                monetize, and secure your brand.
              </p>
            </header>
            {featureData.map((feature, index) => (
              <FeatureTab
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default FeatureSection;
