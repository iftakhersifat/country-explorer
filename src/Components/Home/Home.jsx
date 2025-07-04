import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { Link } from 'react-router';

const Home = () => {
    useEffect(()=>{
        document.title="Home | CountryExplorer"
      },[])

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    // fetch data
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,cca2")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])

    const filtered = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));

    // console.log(data)
    return (
        <div className='container mx-auto mt-10 p-4 md:p-0'>
            {/* input field */}
            <input type="text" placeholder='Search for a country' className='p-2 border border-amber-500 rounded-2xl w-full mb-4'
            value={search} onChange={(e)=>setSearch(e.target.value)}
            />

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                {
                    filtered.map(country=><Link to={`/country/${country.name.common}`} key={country.cca2}>
                    <CountryCard country={country}></CountryCard>
                    </Link>)
                }
            </div>
            
        </div>
    );
};

export default Home;