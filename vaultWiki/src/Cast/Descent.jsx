import { useState, useEffect } from "react";
import CardContainer from './components/CharacterCard';
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
        <div>
          <CardContainer characters={data}/>
        </div>
    );
}

export default Descent;