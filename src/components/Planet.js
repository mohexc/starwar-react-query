import React from 'react'
import "./Planet.less"

const Planet = ({ planet }) => {
    return (
        <div className="planet card">
            <h3>{planet.name}</h3>
            <p>Population - {planet.population}</p>
            <p>Terrain - {planet.terrain}</p>
        </div>
    )
}

export default Planet
