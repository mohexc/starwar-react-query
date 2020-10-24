import React from 'react'
import "./Planets.less"
import { useQuery } from "react-query"

const fetchPlanets = async () => {
    const res = await fetch('http://sswapi.dev/api/planets/')
    return res.json()
}

const Planets = () => {
    const { data, status } = useQuery("planets", fetchPlanets)
    console.log(data)
    return (
        <div className="Planets">
            {status}
        </div>
    )
}

export default Planets
