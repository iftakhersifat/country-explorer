import React, { useEffect } from 'react';
import { Globe, User } from 'lucide-react';

const About = () => {
  useEffect(()=>{
    document.title="About | CountryExplorer"
  },[])
  return (
    <div className='p-4 md:p-0'>
        <div className="container mx-auto mt-10 p-6 bg-white border border-amber-200 rounded-xl shadow-md">
      <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Globe className="text-blue-500" /> About Country Explorer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3 font-inter">
        Country Explorer is an intuitive and responsive web application that allows users to explore comprehensive information about countries worldwide. From capitals and languages to population, currencies, and interactive maps — the platform offers quick insights in one place. Whether you're a student, traveler, or simply curious, Country Explorer makes learning about the world effortless and engaging.
      </p>
      <p className="text-gray-700 font-inter flex items-center gap-1 mt-2">
        <User className="text-green-500 " /> Developed by <span className="font-semibold text-gray-900 ml-1">Iftakher Hossen Sifat</span>
      </p>
    </div>
    </div>
  );
};

export default About;
