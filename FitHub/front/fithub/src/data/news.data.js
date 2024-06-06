import axios from 'axios';
export const getFitnessNews = async () => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'gimnasio OR fitness OR entrenamiento',
                language: 'es',
                apiKey: '9aff3aeb12ec47a0864182fb3710586c'
            }
        });
        return response.data.articles.slice(0, 8);        
    } catch (error) {
        console.error('Error fetching fitness news:', error);
        return [];
    }
};

