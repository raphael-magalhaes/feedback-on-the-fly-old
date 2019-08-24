import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PeopleResultSet from '../components/PeopleResultSet'
import peopleRepository from '../repository/PeopleRepository'

const styles = {
    text: {
        padding: '1rem',
        paddingTop: '1.25rem'
    }
}



export default class Search extends React.Component {
    state = {
        search: '',
        data: [],
        peoples: [],
    };

    onChangeName = (event) => {
        
        this.setState({
            search: event.target.value
        })
    };

    onSearch = async (event) => {
        if(event.key === 'Enter'){
            this.setState({
                data: await peopleRepository.getByName(this.state.search)
            })
        }
    };

    render() {
        return (
            <div>
                
                <div style={{display: 'flex'}}>

                <Typography style={styles.text}variant="body1" gutterBottom>
                    Busca:
                </Typography>
                <TextField
                    onKeyDown={this.onSearch}
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
