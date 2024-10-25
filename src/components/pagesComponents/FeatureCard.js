import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col p-5 rounded-xl shadow-2xl min-w-[240px] w-[343px]">
      <div className="flex gap-2.5 items-center w-[42px]">
        <img
          loading="lazy"
          src={icon}
          alt={title || "Feature icon"}
          className="object-contain self-stretch my-auto aspect-square w-[42px]"
        />
      </div>
      <div className="flex flex-col mt-6 w-full">
        <div className="flex flex-col w-full">
          <h3 className="text-xl font-semibold leading-8 text-white">
            {title}
          </h3>
          <p className="mt-1 text-lg leading-7 text-slate-50">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default FeatureCard;
