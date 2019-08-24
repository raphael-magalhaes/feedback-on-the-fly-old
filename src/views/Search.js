import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios'

const PEOPLE_CIT_SEARCH_URL = 'https://people.cit.com.br/search?q=raphaelms'

const styles = {
    container: {
    },
    text: {
        padding: '1rem'
    }
}

export default class Search extends React.Component {
    state = {
        search: 'raphaelms'
    }

    onChangeName = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    onSearch = () => {
        Axios.get(PEOPLE_CIT_SEARCH_URL,
            { headers: { Authorization: 'Basic CIT_AUTH' } })
            .then((response) => {
                this.setState({
                search: JSON.stringify(response)
            })
        })
    }

    render() {
        return (
            <div style={styles.container}>
                <Typography style={styles.text}variant="body1" gutterBottom>
                    Busca:
                </Typography>
                <TextField
                    label="Login"
                    value={this.state.search}
                    onChange={this.onChangeName}
                />
                <Button variant="contained" color="secondary" onClick={this.onSearch}>
                    Pesquisar
                </Button>
            </div>
        )
    }
}
