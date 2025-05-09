import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {name} = useParams();
    const [country, setCountry] = useState(null);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>{
            const found = data.find(country => country.name.common.toLowerCase() === name.toLowerCase())
            setCountry(found)
        })
    },[name])
     if (!country) return <div className="p-4">Loading...</div>;
    return (
        <div className='container mx-auto mt-10 border border-blue-300 bg-blue-50 p-4 rounded-2xl space-y-4 flex gap-12'>
            <div className='w-[20%] space-y-4'>
                <img className="w-96 h-60 rounded-xl" src={country.flags.png} alt="" />
                 <h1 className='text-2xl font-bold text-center text-gray-800'>{country.name.common}</h1>
            </div>

            <div className='w-[80%] space-y-4'>
                <h1 className='text-2xl font-bold text-gray-800'>{country.name.nativeName.eng.official}</h1>
                <p className='gap-6'><span className='text-gray-500'>Language:</span> <span className='font-bold text-gray-800'>{country.languages.eng}</span></p>
            </div>
        </div>
    );
};

export default CountryDetails;