import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const CountryDetails = () => {
  useEffect(() => {
    document.title = "Details | CountryExplorer";
  }, []);

  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,flags,capital,region,subregion,population,area,cca2,currencies,maps,languages,independent,startOfWeek`
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          setCountry(data[0]);
        } else {
          setError("Country not found.");
          setCountry(null);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load country data.");
      }
    };

    fetchCountry();
  }, [name]);

  const handleReturn = () => {
    navigate("/");
  };

  if (error) {
    return <div className="p-4 text-red-600 font-bold">{error}</div>;
  }

  if (!country) {
    return <div className="p-4 text-blue-500 text-center mt-20"><span className="loading loading-bars loading-xl"></span></div>;
  }

  return (
    <div className='p-4 md:p-0'>
      <div className='container mx-auto mt-10 border border-blue-300 bg-blue-50 p-4 rounded-2xl'>
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
                  <td className="py-2 px-4 font-bold text-gray-800">{country.capital?.join(', ') || "N/A"}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-500">Languages</td>
                  <td className="py-2 px-4 font-bold text-gray-800">
                    {Object.values(country.languages || {}).join(", ") || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-500">Independent</td>
                  <td className="py-2 px-4 font-bold text-gray-800">{country.independent ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-500">Subregion</td>
                  <td className="py-2 px-4 font-bold text-gray-800">{country.subregion || "N/A"}</td>
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
                    {Object.values(country.currencies || {}).map(c => c.name).join(", ") || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-500">Currency Symbols</td>
                  <td className="py-2 px-4 font-bold text-xl text-gray-800">
                    {Object.values(country.currencies || {}).map(c => c.symbol).filter(Boolean).join(", ") || "N/A"}
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

        <button
          onClick={handleReturn}
          className='btn bg-amber-500 text-white p-4 flex rounded-2xl mx-auto mt-10'
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default CountryDetails;
