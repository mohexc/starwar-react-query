import React from 'react'
import "./People.less"
import { useQuery } from "react-query"
import { Skeleton } from 'antd'
import Person from "./Person"

const fetchPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/')
    return res.json()
}

const People = () => {
    const { data, status } = useQuery("people", fetchPeople)
    console.log(data)
    return (
        <div className="people">
            <h2>People</h2>
            {status === "error" && <div>Error fetching data</div>}
            {status === "loading" && <Skeleton active />}
            {status === "success" && (
                data.results.map(person => <Person key={person.created} person={person} />)
            )}
        </div>
    )
}

export default People
