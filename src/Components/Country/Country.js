import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,region,area}=props.country;
    return (
        <div className='country'>
           
            <h1>country name: {name.common}</h1>
            <h3>Population: {population}</h3>
            <p><small>Region:{region}</small></p>
            <p><small>Area:{area}</small></p>
        </div>
    );
};

export default Country;