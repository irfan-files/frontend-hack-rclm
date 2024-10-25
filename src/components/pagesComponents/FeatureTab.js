import React from "react";

function FeatureTab({ title, description }) {
  return (
    <div className="flex flex-col justify-center py-4 pl-6 w-full max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h3 className="text-xl font-semibold max-md:max-w-full">{title}</h3>
        <p className="mt-2 text-base leading-6 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureTab;
