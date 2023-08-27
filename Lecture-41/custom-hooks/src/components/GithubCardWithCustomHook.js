import React from 'react'
import useHttp from '../hooks/useHttp';

const GithubCardWithCustomHook = () => {

    const [data, err, isLoading] = useHttp('https://api.github.com/users/sabeelhps', true);

    if (!err && isLoading) {
        return <p>Loading.........</p>
    }

    if (err) {
        return <p>{ err }</p>
    }
    
    return (
        <figure style={{border:'2px solid purple',borderRadius:'8px', width:'300px', margin:'10px auto'}}>
            <img style={{width:'100%'}} src={data.avatar_url} alt="github profile"/>
            <figcaption>
                <h4>Followers : { data.followers }</h4>
                <h4>Following : { data.following }</h4>
                <p>Public Repos : { data.public_repos }</p>
            </figcaption>
        </figure>
    )
}

export default GithubCardWithCustomHook