import React from 'react';
import { GiElectric, GiHomeGarage, GiSecurityGate, GiToolbox} from 'react-icons/gi';

const Hope = () => {
  const services = [
    { text: "Low current and high voltage", icon: <GiElectric /> },
    { text: "Home automation", icon: <GiHomeGarage /> },
    { text: "Security", icon: <GiSecurityGate /> },
    { text: "Troubleshooting", icon: <GiToolbox /> },
  

  ];

  return (
    <div className="services flex flex-col items-center mt-10 ">
      <h1 className="text-center text-3xl font-bold mb-6 mt-10">DNG Electrician Sallanches</h1>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="service-item flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">{service.icon}</div>
            <p className="text-center">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hope;
