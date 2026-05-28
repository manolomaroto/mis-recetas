import axios from 'axios';

export const fetchRecetas = async () => {
    const response = await axios.get('/data/recetas.json');
    return response.data;
};