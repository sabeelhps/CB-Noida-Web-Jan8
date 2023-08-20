import "./Card.css";

function Card({price, name, desc}) {
   
    return <figure className="card">
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="macbook air"/>
        <figcaption>
            <h2>{ name}</h2>
            <h2>Price: $ { price}</h2>
            <p>{ desc}</p>
        </figcaption>
    </figure>
}

export default Card;