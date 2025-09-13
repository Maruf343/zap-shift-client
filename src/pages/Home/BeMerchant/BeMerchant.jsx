import React from "react";
import merchant from '../../../assets/location-merchant.png'
const BeMerchant = () => {
  return (
    <div data-aos="fade-up" className="bg-[#03373D] bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat p-20 rounded-4xl mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={merchant}
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
          <p className="py-6 text-gray-400">
            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn text-black btn-primary rounded-4xl">Become a Merchant</button>
          <button className="btn btn-outline btn-primary rounded-4xl ms-4">Earn with proFast courier</button>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
