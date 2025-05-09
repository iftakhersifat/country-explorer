import React from 'react';

const CountryCard = ({country}) => {
    return (
        <div className='border border-amber-500 p-4 rounded-2xl space-y-4'>
            <img className="w-96 h-60" src={country.flags.png} alt="" />
            <h1 className='text-2xl font-bold'>{country.name.common}</h1>
        </div>
    );
};

export default CountryCard;