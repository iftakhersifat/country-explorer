import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    // fetch data
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])

    const filtered = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));

    // console.log(data)
    return (
        <div className='container mx-auto mt-10'>
            {/* input field */}
            <input type="text" placeholder='Search for a country' className='p-2 border border-amber-500 rounded w-full mb-4'
            value={search} onChange={(e)=>setSearch(e.target.value)}
            />

            <div>
                {
                    filtered.map(country=><CountryCard country={country}></CountryCard>)
                }
            </div>
            
        </div>
    );
};

export default Home;