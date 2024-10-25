import React from "react";

const RoadmapCard = ({ quarter, features }) => (
  <article className="flex flex-col justify-center p-6 bg-gray-100 rounded-3xl min-w-[240px] w-[450px] max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col w-full">
      <h3 className="text-7xl font-medium tracking-tighter leading-none text-gray-900 max-md:text-4xl">
        {quarter}
      </h3>
      <p className="mt-2 text-xl leading-8 text-slate-600">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            {feature}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  </article>
);

export default RoadmapCard;
