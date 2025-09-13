import React from "react";
import { FaTruck, FaMoneyBillWave, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const works = [
  {
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: FaTruck,
  },
  {
    title: "Cash On Delivery",
    description: "We collect payment from customers and ensure safe delivery of your products.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Delivery Hub",
    description: "Packages are managed through our reliable hubs for faster distribution.",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Booking SME & Corporate",
    description: "Customized solutions for SMEs & corporate clients with full logistics support.",
    icon: FaBuilding,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl text-black md:text-3xl font-bold mb-10">
          How it Works
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {works.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex bg-white rounded-2xl p-6 flex-col ">
                <div className="text-4xl text-gray-400 mb-3">
                  <Icon />
                </div>
                <h3 className="font-semibold text-black  mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
