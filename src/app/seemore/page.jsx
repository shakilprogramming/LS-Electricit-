import React from 'react';
import Link from 'next/link'; // Import the Link component

const Page = () => {
    return (
        <div className="hero bg-gray-200 min-h-screen text-black">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Électricité générale</h1>
            <h1 className="text-5xl font-bold">et Industriels</h1>
            <p className="py-6">
            👷 Des professionnels au service de vos projets électriques !
            </p>
            <div className='text-left'>
            <p className='mt-2'> Depuis 2016, nous mettons notre expertise au service des particuliers, entreprises et industries. Travaillant en famille avec mes frères, nous réalisons toutes vos installations électriques avec rigueur et professionnalisme.</p>
            <p className='mt-2'>⚡ Nos domaines d’intervention
            Nous prenons en charge tous types d’installations électriques, que ce soit en courant fort ou courant faible, en neuf comme en rénovation.</p>
            <p className='mt-2'>🔹 Électricité générale
            (logements, commerces, bureaux)</p>
            <p>🔹 Électricité industrielle (usines, ateliers, machines)</p>
            <p>🔹 Tableaux électriques, mises aux normes</p>
            <p className=''>🔹 Éclairage, prises, domotique, alarmes & réseaux</p>
            <p className='mt-4'> Pourquoi nous faire confiance ?</p>

            </div>
       <div className='text-left mt-4'>
       <p>✅ 8+ ans d’expérience dans l’électricité générale et industrielle</p>
        <p>✅ Une équipe familiale, soudée et passionnée</p>
        <p>✅ Un travail soigné, sécurisé et conforme aux normes</p>
        <p>✅ Une réactivité et une disponibilité exemplaires</p>
        <p>diplômé en :</p>
         <p>✅ CAP Électricité</p>
        <p>✅ Bac Pro MELEC (Métiers de l'Électricité et de ses Environnements Connectés)</p>
       <p>✅ BTS Électrotechnique</p>
        <p className='mt-4'> Besoin d’un électricien expérimenté ?
        Contactez-nous dès aujourd’hui pour un devis gratuit et une intervention rapide </p>
       </div>

           
          </div>
        </div>
      </div>
    );
};

export default Page;