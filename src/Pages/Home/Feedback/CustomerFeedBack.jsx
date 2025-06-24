import React from "react";
import img from "../../../assets/customer-top.png";
const CustomerFeedbackSection = () => {
  return (
    <section className="flex items-center justify-center py-12">
      <div className="max-w-xl w-full px-4 text-center">
        <img src={img} alt="Customer feedback" className="mx-auto mb-6 " />
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          What our customers are saying
        </h2>
        <p className="text-gray-500 text-lg sm:text-xl">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
    </section>
  );
};

export default CustomerFeedbackSection;
