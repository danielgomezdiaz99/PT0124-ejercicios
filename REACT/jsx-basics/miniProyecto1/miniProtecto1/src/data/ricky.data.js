const apiUrl = 'https://rickandmortyapi.com/api/character/';
export const dataRicky = async function obtenerDatosPersonajes() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
}