import TypeImage from './TypeImage';
import './Cast.css'; // Para os estilos

const CardContainer = ({ characters }) => {
  return (
    <div className="card-container">
      {characters.map((character, index) => (
        <div className="card" key={index}>
          <h2 className="card-title">{character.name}</h2>
          <p className="card-subtitle">{character.aluma}</p>
          <p className="card-subtitle">{character.cabin}</p>
          <TypeImage types={character.type} />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;