import './Cast.css' 
import { useState, useEffect } from 'react'

const Archetypes = () => {
    
    const [data, setData] = useState([])
    const [totalPoints, setTotalPoints] = useState(0)
    const maxPoints = 21

    useEffect(() => {
        const fetchArchetypes = async () => {
            try{
                const response = await fetch('https://api.npoint.io/acfbad749e43cc1cafa5')
                if (response.ok) {
                    const data = await response.json()
                    const initializedData = data.Archetypes.map(category => ({
                        ...category,
                        skills: category.skills.map(skill => ({
                            ...skill,
                            points: 0 
                        }))
                    }));
                    setData(initializedData)
                } else {
                    console.error('Erro ao buscar dados')
                }
            } catch (error) {
                console.error('Erro no fetch ', error)
            }
        }

        fetchArchetypes();

    }, [])
    
    const handleAddPoint = (categoryIndex, skillIndex) => {
        if (totalPoints < maxPoints) {
            const newData = [...data]
            newData[categoryIndex].skills[skillIndex].points += 1
            setData(newData) 
            setTotalPoints(totalPoints + 1)
        }
    }

    const handleRemovePoint = (categoryIndex, skillIndex) => {
        const skillPoints = data[categoryIndex].skills[skillIndex].points
        if (skillPoints > 0) {
            const newData = [...data]
            newData[categoryIndex].skills[skillIndex].points -= 1
            setData(newData) 
            setTotalPoints(totalPoints - 1)
        }
    }
    
    return (
        <div className='archetypes-container'>
          {data.map((category, categoryIndex) => (
            <div key={categoryIndex} className='category-section'>
              <h2 className='category-name'>{category.category}</h2>
              {category.skills.map((skill, skillIndex) => {
                const skillPoints = skill.points || 0;
                if (totalPoints === maxPoints && skillPoints === 0) {
                  return null;
                }
    
                return (
                  <div key={skillIndex} className='skill-card'>
                    <h3 className='skill-title'>{skill.name}</h3>
                    <p className='skill-description'>{skill.description}</p>
                    <div className='skill-controls'>
                      <button className='decrement' onClick={() => handleRemovePoint(categoryIndex, skillIndex)} disabled={skillPoints === 0}>
                      <span className='button-span'>-</span>
                      </button>
                      <span className='points'>{skillPoints}</span>
                      <button className='increment' onClick={() => handleAddPoint(categoryIndex, skillIndex)} disabled={totalPoints === maxPoints}>
                      <span className='button-span'>+</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      );
}

export default Archetypes;
