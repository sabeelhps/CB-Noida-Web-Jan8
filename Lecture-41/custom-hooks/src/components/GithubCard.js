import React, { useEffect, useState } from 'react'

const GithubCard = () => {

    const [profile, setProfile] = useState({
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoSn7GBNeUetrkNssg5dGJRn4Q18bo7YQLDVfFHou&s",
        followers: 0,
        following: 0,
        publicRepos: 0
    });
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     side effect we want to perform
    // },[dependency array])

    console.log('Starting to render the component');

    useEffect(() => {
        console.log('Inside use effect callback');
    }, []);

    useEffect(() => {
        console.log('Performing another effect');
    }, [count]);

    useEffect(() => {
        (async() => {
            try {
                const res = await fetch('https://api.github.com/users/sabeelhps');
                const data = await res.json();
                console.log("Inside Fetch Github Profile");
                console.log(data);
                setProfile({
                    imageUrl: data.avatar_url,
                    followers: data.followers,
                    following: data.following,
                    publicRepos: data.public_repos
                })
            }
            catch (err) {
                console.log(err);
            }
        })()
    }, []);

    console.log('After useEffect');

    return (
        <figure style={{border:'2px solid purple',borderRadius:'8px', width:'300px', margin:'10px auto'}}>
            <img style={{width:'100%'}} src={profile.imageUrl} alt="github profile"/>
            <figcaption>
                <h4>Followers : { profile.followers }</h4>
                <h4>Following : { profile.following }</h4>
                <p>Public Repos : { profile.publicRepos }</p>
            </figcaption>
            <h2>Count : { count }</h2>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
        </figure>
    )
}

export default GithubCard