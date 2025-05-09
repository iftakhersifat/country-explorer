import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const CountryDetails = () => {
  useEffect(()=>{
      document.title="Details | CountryExplorer"
    },[])

    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                const found = data.find(country => country.name.common.toLowerCase() === name.toLowerCase());
                setCountry(found);
            });
    }, [name]);

    if (!country) return <div className="p-4">Loading...</div>;

    const handelReturn=()=>{
        navigate("/")
    }

    return (
        <div className='p-4 md:p-0'>
          <div className='container mx-auto mt-10 border border-blue-300 bg-blue-50 p-4 rounded-2xl '>
            <div className='space-y-4 lg:flex gap-12'>
            <div className='lg:w-[30%] space-y-4 flex flex-col justify-center'>
                <img className="w-96 h-60 mx-auto rounded-xl" src={country.flags.png} alt="Flag" />
                <h1 className='text-2xl font-bold text-center text-gray-800'>{country.name.common}</h1> 
            </div>

            <div className="lg:w-[70%] mx-auto border border-amber-300 p-4 rounded-xl">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">{country.name.official}</h1>
  <table className="w-full table-auto border border-gray-300 rounded overflow-hidden">
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="py-2 px-4 text-gray-500">Capital</td>
        <td className="py-2 px-4 font-bold text-gray-800">{country.capital}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Languages</td>
        <td className="py-2 px-4 font-bold text-gray-800">
          {Object.values(country.languages || {}).join(", ")}
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Independent</td>
        <td className="py-2 px-4 font-bold text-gray-800">{country.independent ? "Yes" : "No"}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Subregion</td>
        <td className="py-2 px-4 font-bold text-gray-800">{country.subregion}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Area</td>
        <td className="py-2 px-4 font-bold text-gray-800">{country.area.toLocaleString()} km²</td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Start of Week</td>
        <td className="py-2 px-4 font-bold text-gray-800">
          {country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1)}
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Population</td>
        <td className="py-2 px-4 font-bold text-gray-800">{country.population.toLocaleString()}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Currencies</td>
        <td className="py-2 px-4 font-bold text-gray-800">
          {Object.values(country.currencies || {}).map(c => c.name).join(", ")}
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Currency Symbols</td>
        <td className="py-2 px-4 font-bold text-xl text-gray-800">
          {Object.values(country.currencies || {}).map(c => c.symbol).filter(Boolean).join(", ")}
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">Google Maps</td>
        <td className="py-2 px-4 font-bold text-blue-600">
          <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 text-gray-500">OpenStreetMap</td>
        <td className="py-2 px-4 font-bold text-blue-600">
          <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">
            View on OpenStreetMap
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
        <button onClick={handelReturn} className='btn bg-amber-500 text-white p-4 flex rounded-2xl mx-auto mt-10'>Go Back Home</button>
        </div>
        </div>
    );
};

export default CountryDetails;
