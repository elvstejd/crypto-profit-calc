import axios from '../axiosSetup';

function getCoins() {
    return axios.get('/coins');
}

export default getCoins;
