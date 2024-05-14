import {type Doc ,type APISpaceXResponse } from '../types/api'

export const getLatestLaunches = async () => {

    const res = await fetch('https://api.spacexdata.com/v4/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: {
            },
            options: {
                sort: {
                    date_unix: 'asc'
                },    
                limit: 9
            }
        })
    })
    const data = await res.json() as APISpaceXResponse
    const { docs:launches } = data
    return launches
}

export const getLaunchById = async (id: string) => {
    const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
    const launch = await res.json() as Doc
    return launch
}