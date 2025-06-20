import React from "react";
import location from "../../../assets/location-merchant.png";

const BeMerchant = () => {
  return (
    <div className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] my-8 rounded-4xl md:p-20">
      <div className="flex items-center justify-between hero-content flex-col lg:flex-row-reverse">
        <img src={location} className=" rounded-lg " />
        <div>
          <h1 className="lg:text-5xl text-center md:text-left md:text-4xl text-2xl text-white font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 text-center md:text-left text-[#DADADA]">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex items-center justify-center md:justify-start flex-row gap-4">
            <button className="px-4 py-2 bg-green text-black rounded-full">
              Become A Merchant
            </button>
            <button className="px-4 py-2 bg-transparent hover:text-black hover:bg-green duration-300 text-green border border-green rounded-full">
              Earn with Profast Courier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
