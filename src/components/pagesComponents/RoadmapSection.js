import React from "react";
import RoadmapCard from "./RoadmapCard";

const roadmapData = [
  {
    quarter: "Q4 2024",
    features: [
      "Minting Videos: Soon, creators will be able to mint individual videos as NFTs, creating a new level of ownership and exclusivity for their most valuable content.",
      "Badges for Everyone: Showcase achievements with community badges.",
      "Smart Contract Audits: Ensuring security with audits.",
    ],
  },
  {
    quarter: "Q2 2025",
    features: [
      "Subscription Program: Super Pass holders will have access to exclusive content, and creators can build deeper, more meaningful relationships with their top fans.",
      "Royalty Sharing: NFT holders will receive royalties on a daily, monthly, or customizable basis, offering more ways to engage your audience while rewarding them for their support.",
    ],
  },
];

const RoadmapSection = () => (
  <section className="flex overflow-hidden flex-col gap-10 items-center px-16 py-28 bg-blue-950 max-md:px-5 max-md:py-24">
    <header className="flex flex-col items-center text-4xl font-bold tracking-tighter leading-none text-white uppercase">
      <h2>our roadmap</h2>
    </header>
    <div className="flex flex-wrap gap-10 p-3.5 mt-10 rounded-3xl max-md:max-w-full">
      {roadmapData.map((item, index) => (
        <RoadmapCard
          key={index}
          quarter={item.quarter}
          features={item.features}
        />
      ))}
    </div>
  </section>
);

export default RoadmapSection;
