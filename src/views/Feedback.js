import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const styles = {
    container: {
    },
    text: {
        padding: '1rem'
    }
}

export default class Feedback extends React.Component {
    state = {
        search: this.props.match.params.username
    }

    onChangeName = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    onChangeFeedback = (event) => {
        this.setState({
            feedback: event.target.value
        })
    }

    onEmojiClick = (event) => {
        this.setState({
            selectedEmojiID: event.target.id
        })
    }

    render() {
        return (
            <div style={styles.container}>
                <Typography style={styles.text}variant="body1" gutterBottom>
                    Digite seu feedback:
                </Typography>

                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div id="emoji-triste" onClick={this.onEmojiClick}>
                        Triste
                    </div>
                    <div id="emoji-indiferente" onClick={this.onEmojiClick}>
                        Indiferente
                    </div>
                    <div id="emoji-feliz" onClick={this.onEmojiClick}>
                        Feliz
                    </div>
                    <div id="emoji-cafe" onClick={this.onEmojiClick}>
                        Café
                    </div>
                </div>

                <TextareaAutosize
                    style={{height: '5rem', width: '20rem'}}
                    rowsMax={4}
                    placeholder="Digite aqui seu feedback!"
                    value={this.state.feedback}
                    onChange={this.onChangeFeedback}
                />
            </div>
        )
    }
}
