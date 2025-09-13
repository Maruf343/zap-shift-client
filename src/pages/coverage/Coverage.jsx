import React from "react";
import BangladeshMap from "./BangladeshMap";
import { useLoaderData } from "react-router";


const Coverage = () => {
    const serviceCenters = useLoaderData()
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        We are available in 64 districts
      </h1>

      {/* Bangladesh Map Component */}
      <BangladeshMap serviceCenters={serviceCenters}></BangladeshMap>
    </div>
  );
};

export default Coverage;
