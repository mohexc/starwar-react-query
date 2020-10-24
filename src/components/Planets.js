import React, { useState } from 'react'
import "./Planets.less"
import { useQuery } from "react-query"
import Planet from './Planet'
import { Skeleton, Pagination } from 'antd'

const fetchPlanets = async (key, greeting, page) => {
    console.log(greeting)
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
    return res.json()
}

const Planets = () => {
    const [page, setPage] = useState(1)
    const { data, status } = useQuery(["planets", "hello, ninjas", page], fetchPlanets, {
        // staleTime: 0,
        // cacheTime: 10,
        onSuccess: () => console.log("data fetched with no problemo")
    })
    console.log(data)

    const handlePagination = (value) => {
        setPage(value)
    }

    return (
        <div className="planets">
            <h2>Planets</h2>
            <Pagination defaultCurrent={1} total={status === "success" && data.count} onChange={handlePagination} />
            {status === "error" && <div>Error fetching data</div>}
            {status === "loading" && <Skeleton active />}
            {status === "success" && (
                data.results.map(planet => <Planet key={planet.created} planet={planet} />)
            )}
        </div>
    )
}

export default Planets
