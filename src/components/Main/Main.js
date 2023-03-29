import React, { useEffect, useState } from 'react'
import Flat from '../Flat/Flat';
import './main.css'

const fetchData = async () => {
    try {
        const res = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json');
        const rentData = await res.json();
        return rentData;
    } catch(err){
        console.log(err);
        return [];
    }
}

function Main() {
    const [flats, setFlats] = useState([])

    useEffect(() => {
        fetchData().then((rentData) => setFlats(rentData))
    }, []);

    const places = flats.map((flat) => {
        return <Flat 
        key={flat.id} 
        img={flat.imageUrl}
        name={flat.name}
        lat={flat.lat}
        lon={flat.lng}
        price={flat.price}
        currency={flat.priceCurrency}
        />
    })

    return (
      <div className='flat-container'> {places} </div>
    )
}

export default Main