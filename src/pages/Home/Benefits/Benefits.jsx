import React from "react";
import tracking from '../../../assets/live-tracking.png'
import delivaryman from '../../../assets/tiny-deliveryman.png'
import safe from '../../../assets/safe-delivery.png'

const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: tracking,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: delivaryman,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our support team is available round the clock to assist you with any queries or concerns. Get help anytime, anywhere.",
    img: safe,
  },
];

const Benefits = () => {
  return (
    <div className="container mx-auto px-4 py-20 space-y-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col md:flex-row items-center bg-white shadow-md hover:shadow-lg transition rounded-xl p-10"
        >
          {/* Left image */}
          <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-30 h-30 object-contain"
            />
          </div>

          {/* Divider (only on md+ screens) */}
          <div className="hidden md:block w-px h-30 bg-gray-300 mx-6"></div>

          {/* Right content */}
          <div className="text-center md:text-left">
            <h3 className="text-xl text-blue-950 font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
