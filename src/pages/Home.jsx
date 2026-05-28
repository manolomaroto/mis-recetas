import { useEffect, useState } from 'react';
import { fetchRecetas } from '../inc/recetasApi';
import RecetaCard from '../components/RecetaCard';

function Home() {
  const [recetas, setRecetas] = useState([]);
  
  useEffect(() => {
    fetchRecetas().then(data => setRecetas(data));
  }, []);

    return (
        <>
            <h1>Recetas de postres</h1>
            <section id="recetas">
                {recetas.map(receta => (
                    <RecetaCard key={receta.id} receta={receta} />
                ))}
            </section>  
        </>
    );
}

export default Home;