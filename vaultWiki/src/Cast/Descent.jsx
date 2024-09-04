import { useState, useEffect } from "react";
import './Cast.css'

async function fetchData(setData) {
    try {
        const response = await fetch('https://api.npoint.io/cf2e0f99d3b39471e143');
        if (response.ok) {
            const data = await response.json(); 
            setData(data.cast); 
        } else {
            console.error('Network response not okay');
        }
    } catch (error) {
        console.error('Error getting data', error);
    }
}

const Descent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(setData);
    }, []); 

    return (
        <div className='card-container'>
            {data.map((character, index) => (
                <div className="card" key={index}>
                    <h2 className="card-title">{character.name}</h2>
                    <p className="card-subtitle">Aluma: {character.aluma}</p>
                    <p className="card-subtitle">Cabin: {character.cabin}</p>
                    <p className="card-subtitle">Type: {character.type.join(", ")}</p>
                </div>
            ))}
        </div>
    );
}

export default Descent;