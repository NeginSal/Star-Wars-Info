import React from "react";
import Person from "./Person";
import { useQuery } from 'react-query'

const fetchPerson = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json()
}

const People = () => {

    const { data, status } = useQuery('people', fetchPerson)
    console.log(data)
    console.log(status)

    return (
        <div>
            <h2>People</h2>
            {status === 'loading' && (<div>Loading ...</div>)}
            {status === 'error' && (<div>Error</div>)}
            {status === 'success' && (
                <div>
                    {data.results.map(person =>
                        <Person person={person} key={person.name} />
                    )}
                </div>
            )}
        </div>

    );
}

export default People;