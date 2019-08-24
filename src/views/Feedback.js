import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
    container: {
    },
    text: {
        padding: '1rem'
    }
}

export default class Feedback extends React.Component {
    state = {
        search: 'raphaelms'
    }

    onChangeName = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return (
            <div style={styles.container}>
                <Typography style={styles.text}variant="body1" gutterBottom>
                    Digite seu feedback:
                </Typography>
                <TextField
                    label="Feedback"
                    value={this.state.search}
                    onChange={this.onChangeName}
                />
            </div>
        )
    }
}
