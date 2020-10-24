import React, { useState } from 'react'
import "./People.less"
import { usePaginatedQuery } from "react-query"
import { Button, Skeleton } from 'antd'
import Person from "./Person"

const fetchPeople = async (key, page) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    return res.json()
}

const People = () => {
    const [page, setPage] = useState(1)
    const { resolvedData, latestData, status } = usePaginatedQuery(["people", page], fetchPeople)

    console.log(resolvedData, `resolveData`)
    debugger
    return (
        <div className="people">
            <h2>People</h2>
            <Button disabled={page === 1} className="btn-lift" type="primary" onClick={() => setPage(old => Math.max(old - 1, 1))}>Previous page</Button>
            <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>{page}</span>
            <Button disabled={!latestData || !latestData.next} className="btn-lift" type="primary" onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))}>Next page</Button>
            {status === "error" && <div>Error fetching data</div>}
            {status === "loading" && <Skeleton active />}
            {status === "success" && (
                resolvedData.results.map(person => <Person key={person.created} person={person} />)
            )}
        </div>
    )
}

export default People
