import React from 'react'
import "./Planets.less"
import { useQuery } from "react-query"
import Planet from './Planet'

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/')
    return res.json()
}

const Planets = () => {
    const { data, status } = useQuery("planets", fetchPlanets)
    console.log(data)
    return (
        <div className="Planets">
            {status === "error" && <div>Error fetching data</div>}
            {status === "loading" && <div>Loading data...</div>}
            {status === "success" && (
                data.results.map(planet => <Planet key={planet.created} planet={planet} />)
            )}
        </div>
    )
}

export default Planets
