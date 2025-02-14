import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { GiElectric, GiHomeGarage, GiSecurityGate, GiToolbox} from 'react-icons/gi';
import { MdConnectedTv } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";


const Hope = () => {
  const services = [
    { text: "Courant Forte et courant faible", icon: <GiElectric /> },
    { text: "Domotique ", icon: <GiHomeGarage /> },
    { text: "Sécurité", icon: <GiSecurityGate /> },
    { text: "Dépannage ", icon: <GiToolbox /> },
    {text:"Tv & Internet", icon: <MdConnectedTv />},
    {text:" Particuliers & Professionnels", icon:<FaHandshake />}
  

  ];

  return (
    <div className="services flex flex-col items-center mt-28 bg-red-100 text-black w-full">
      <h1 className="text-center text-4xl font-bold mb-6 mt-12">Electrician Sallanches</h1>
      {/* <h1>TV internet     
      </h1>
      Particuliers & Professionnels
      Etude
         Installation industriel
       */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-orange-100 h-96 p-3 w-full">
        {services.map((service, index) => (
          <div key={index} className="service-item flex flex-col items-center justify-center">
            <div className="text-6xl mb-2">{service.icon}</div>
            <p className="text-center text-3xl">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hope;
