import React from 'react';

const CountryCard = ({country}) => {
    return (
        <div className='border border-blue-300 bg-blue-50 p-4 rounded-2xl space-y-4'>
            <img className="w-96 h-60 rounded-xl" src={country.flags.png} alt="" />
            <h1 className='text-2xl font-bold text-center text-gray-800'>{country.name.common}</h1>
            <div className='flex justify-between'>
                <p className='flex flex-col'><span className='text-gray-500'>Region:</span> <span className='font-bold text-gray-800'>{country.region}</span></p>
                <p className='flex flex-col'><span className='text-gray-500'>Capital:</span> <span className='font-bold text-gray-800'>{country.capital}</span></p>
            </div>
        </div>
    );
};

export default CountryCard;