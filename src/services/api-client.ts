import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key : '97d1d6c604604f47919ad52ccfed7a4f'
    }
})