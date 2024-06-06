import axios from 'axios';
export const getFoodItemsInSpanish = async () => {
    try {
        const response = await axios.get('https://trackapi.nutritionix.com/v2/search/instant', {
            params: { query: 'manzana' },
            headers: {
                'x-app-id': '9d307ba2',
                'x-app-key': '6711506f87aa7e20cdcac97c3b785d82',
                'x-remote-user-id': 'dgd380'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Nutritionix API:', error);
        return [];
    }
};