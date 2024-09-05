import './Cast.css' 
import { useState, useEffect } from 'react'

const Archetypes = () => {
    
    const[data, setData] = useState([])

    useEffect(() => {
        const fetchArchetypes = async () => {
            try{
                const response = await fetch('https://api.npoint.io/acfbad749e43cc1cafa5')
                if (response.ok) {
                    const data = await response.json()
                    setData(data.Archetypes)
                } else {
                    console.error('Erro ao buscar dados')
                }
            } catch (error) {
                console.error('Erro no fetch ', error)
            }
        }

        fetchArchetypes();

    }, [])
    

    return (
        <div className='archetypes-container'>
          {data.map((category, categoryIndex) => (
            <div key={categoryIndex} className='category-section'>
              <h2 className='category-name'>{category.category}</h2>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className='skill-card'>
                  <h3 className='skill-title'>{skill.name}</h3>
                  <p className='skill-description'>{skill.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
}

export default Archetypes