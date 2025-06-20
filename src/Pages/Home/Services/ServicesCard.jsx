import React from 'react';

const ServiceCard = ({ service }) => {
    const {icon: Icon, title, description} = service
  return (
    <div className="bg-white shadow-md hover:bg-green group rounded-2xl text-center p-6 border hover:shadow-lg transition-all duration-300">
      <div className="text-4xl flex items-center justify-center mb-4">
        {Icon}
      </div>
      <h3 className="text-xl group-hover:text-white duration-300 font-semibold mb-2 text-green">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;