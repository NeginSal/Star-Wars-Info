import React from "react";
import { useQuery } from 'react-query'

const fetchPlanet = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json()
}

const Planet = () => {
    
    const { data, status } = useQuery('planets', fetchPlanet)
    console.log(data)

    return (
        <div>
            {status === 'loading' && (<div>Loading ...</div>)}
            {status === 'error' && (<div>Error</div>)}
        </div>

    );
}

export default Planet;