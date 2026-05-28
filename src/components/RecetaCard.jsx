import { Link } from 'react-router-dom';

function RecetaCard({ receta }) {
    return (
        <div className="receta-card">
            <figure className="receta-img">
                <img src={receta.imagen} alt={receta.titulo} />
            </figure>
            <h3>{receta.titulo}</h3>
            <p>{receta.descripcion}</p>
            <Link to={`/receta/${receta.id}`}>Ver receta</Link>
        </div>      
    )
}

export default RecetaCard;