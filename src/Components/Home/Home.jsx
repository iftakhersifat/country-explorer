import React, { useEffect, useState } from 'react';

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

    console.log(data)
    return (
        <div className='container mx-auto mt-10'>
            
        </div>
    );
};

export default Home;