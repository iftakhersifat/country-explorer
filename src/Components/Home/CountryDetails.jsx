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
        <div>
            <h1>{country.name.common}</h1>
        </div>
    );
};

export default CountryDetails;