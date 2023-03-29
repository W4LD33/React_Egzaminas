import React, { useEffect, useState } from 'react';
import './flat.css';

const Flat = (props) => {
  const fetchData = async () => {
    const API_KEY = 'AIzaSyDeq640tNXoTCXcBBSZSCsW35A9QVI3obo';
    try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.lon}&key=${API_KEY}`
        );
        const data = await res.json();
        return data.results[0];
      } catch (err) {
        console.log(err);
        return {};
      }
    };
  
    const [location, setLocation] = useState({ address_components: [] });
  
    useEffect(() => {
      fetchData().then((data) => setLocation(data));
    }, []);
  
    const getCityAndCountry = (addressComponents) => {
      let city = '';
      let country = '';
      if (Array.isArray(addressComponents)) {
        for (let component of addressComponents) {
          if (component.types.includes('locality')) {
            city = component.long_name;
          }
          if (component.types.includes('country')) {
            country = component.long_name;
          }
        }
      }
      return `${city}, ${country}`;
    };
  
    return (
      <div>
        <img className="flat-image" src={props.img} alt="flat" />
        <h2 className='flat-title'>{location.address_components ? getCityAndCountry(location.address_components) : ""}</h2>
        <h2 className='flat-title'>{props.name}</h2>
        <h2 className='flat-price'><span>{props.currency} {props.price}</span> night</h2>
      </div>
    );
};

export default Flat;