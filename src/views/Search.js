import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PeopleResultSet from '../components/PeopleResultSet'

const PEOPLE_CIT_SEARCH_URL = 'https://people.cit.com.br/search?q=raphaelms'

const styles = {
    text: {
        padding: '1rem',
        paddingTop: '1.25rem'
    }
}

// TODO: Remove this mocked data.
const MOCKED_DATA = [
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

export default class Search extends React.Component {
    state = {
        search: '',
        data: []
    }

    onChangeName = (event) => {
        
        this.setState({
            search: event.target.value
        }, () => this.onFilter())
    }

    onFilter = () => {
        const { search } = this.state

        let newData = []
        newData = MOCKED_DATA.filter(data => {
            return search !== '' && data.username.includes(search)
        })

        this.setState({
            data: newData
        })
    }

    onSearch = () => {

        this.setState({
            data: MOCKED_DATA
        })
    }

    render() {
        return (
            <div>
                
                <div style={{display: 'flex'}}>

                <Typography style={styles.text}variant="body1" gutterBottom>
                    Busca:
                </Typography>
                <TextField
                    label="Login"
                    value={this.state.search}
                    onChange={this.onChangeName}
                />
                </div>

                <br/>
                <br/>

                <PeopleResultSet data={this.state.data} history={this.props.history}/>

            </div>
        )
    }
}
