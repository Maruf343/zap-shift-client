import React from "react";
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const { icon: Icon, title, description } = service
  return (
    <div className="card serviceCard-bg cursor-pointer shadow-md hover:shadow-xl transition rounded-xl">
  <div className="card-body items-center text-center">
    <div className="text-4xl text-primary mb-3">
      <Icon />
    </div>
    <h3 className="card-title text-black text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
</div>
  );
};

export default ServiceCard;
