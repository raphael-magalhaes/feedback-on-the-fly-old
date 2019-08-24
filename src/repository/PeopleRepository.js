import axios from 'axios';

const url = 'https://44ys6nth5i.execute-api.us-east-2.amazonaws.com/default/onthefly';

export default {
    getByName: (userName) => {
        return axios.get(url, {
            params: {userName}
        })
        .then(res => res)
        .catch((e) => {
            return [
                {name: 'Rubber Duck 0', username: 'duck0', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
                {name: 'Rubber Duck 1', username: 'duck1', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
                {name: 'Rubber Duck 2', username: 'duck2', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
                {name: 'Rubber Duck 3', username: 'duck3', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
                {name: 'Rubber Duck 4', username: 'duck4', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
                {name: 'Raphael Magalhães', username: 'raphaelms', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
                {name: 'Raphael João', username: 'rafaelms', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
                {name: 'Raphael', username: 'raphaelql', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'},
                {name: 'João Raphael', username: 'raphaelth', imageURL: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg'}
            ]
        })

    },
};