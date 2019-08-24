import axios from 'axios';

import RAPHAELMS_IMAGE from './raphaelms.jpg'

const url = 'https://44ys6nth5i.execute-api.us-east-2.amazonaws.com/default/onthefly';
const urlErrada = 'https://44ys6nth5i.execute-api.us-east-2.amazonaws.com/default/onthefly_NON_ECXISTE';

const MOCKED_DATA = [
    {name: 'Raphael Magalhães', username: 'raphaelms', imageURL: RAPHAELMS_IMAGE},
    {name: 'Rubber Duck 1', username: 'duck1', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
    {name: 'Rubber Duck 2', username: 'duck2', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
    {name: 'Rubber Duck 3', username: 'duck3', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
    {name: 'Rubber Duck 4', username: 'duck4', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
    {name: 'Raphael Magalhães', username: 'raphaelms', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
    {name: 'Raphael João', username: 'rafaelms', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
    {name: 'Raphael', username: 'raphaelql', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
    {name: 'João Raphael', username: 'raphaelth', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'}
]

export default {
    getByName: (username) => {
        return axios.get(url, {
            params: {username}
        })
        .then(res => res.data)
        .catch((e) => {
            return MOCKED_DATA
        })

    },
};