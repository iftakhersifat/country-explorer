import React from 'react';

const CountryCard = ({country}) => {
    return (
        <div>
            <img src={country.flags.png} alt="" />
            <h1 className='text-2xl font-bold'>{country.name.common}</h1>
        </div>
    );
};

export default CountryCard;