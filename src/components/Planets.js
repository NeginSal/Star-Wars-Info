import React from "react";
import Planet from "./Planet";
import { useQuery } from 'react-query'

const fetchPlanet = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json()
}

const Planets = () => {

    const { data, status } = useQuery('planets', fetchPlanet)
    console.log(data)
    console.log(status)

    return (
        <div>
            {status === 'loading' && (<div>Loading ...</div>)}
            {status === 'error' && (<div>Error</div>)}
            {status === 'success' && (
                <div>
                    {data.results.map(planet =>
                        <Planet planet={planet} key={planet.name} />
                    )}
                </div>
            )}
        </div>

    );
}

export default Planets;