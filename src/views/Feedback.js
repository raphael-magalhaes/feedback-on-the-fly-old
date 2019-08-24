import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import Feliz from './feliz.jpg'
import Neutro from './neutro.jpg'
import Triste from './triste.jpg'
import Coffee from './coffee.jpg'

const styles = {
    container: {
    },
    textArea: {
        borderRadius: '15px',
        padding: '0.5rem',
        marginBottom: '0.5rem',
        height: '5rem',
        width: '20rem'
    },
    triste: {
        width: '5rem'
    },
    neutro: {
        width: '5rem'
    },
    feliz: {
        marginTop: '2px',
        width: '5rem'
    },
    coffee: {
        width: '6.3rem'
    },
    text: {
        padding: '1rem'
    },
    selected: {
        borderRadius: '15px',
        overflow: 'hidden'
    },
    notSelected: {
        overflow: 'hidden',
        filter: 'grayscale(100%)'
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
            selected: event.target.id
        })
    }

    handleCloseModal = () => {
        this.setState({isModalOpen: false})
    }

    render() {
        const { selected = undefined, isModalOpen } = this.state

        const tristeStyle = selected === 'emoji-triste' || selected === undefined  ? styles.selected: styles.notSelected
        const neutroStyle = selected === 'emoji-neutro' || selected === undefined ? styles.selected: styles.notSelected
        const felizStyle = selected === 'emoji-feliz' || selected === undefined ? styles.selected: styles.notSelected
        const coffeeStyle = selected === 'emoji-coffee' || selected === undefined ? styles.selected: styles.notSelected

        return (
            <div style={styles.container}>

                <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '1rem'}}>
                    <div style={tristeStyle} id="emoji-triste" onClick={this.onEmojiClick}>
                        <img id="emoji-triste" style={styles.triste} src={Triste} />
                    </div>
                    <div style={neutroStyle} id="emoji-neutro" onClick={this.onEmojiClick}>
                        <img id="emoji-neutro" style={styles.neutro} src={Neutro} />
                    </div>
                    <div style={felizStyle} id="emoji-feliz" onClick={this.onEmojiClick}>
                        <img id="emoji-feliz" style={styles.feliz} src={Feliz} />
                    </div>
                    <div style={coffeeStyle} id="emoji-coffee" onClick={this.onEmojiClick}>
                        <img id="emoji-coffee" style={styles.coffee} src={Coffee} />
                    </div>
                </div>

                <TextareaAutosize
                    style={styles.textArea}
                    rowsMax={4}
                    placeholder="Digite aqui seu feedback."
                    value={this.state.feedback}
                    onChange={this.onChangeFeedback}
                />

                <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                    <Button style={{display: 'block'}} onClick={() => this.setState({isModalOpen: true})} variant="contained" color="secondary">
                        Enviar
                    </Button>
                </div>

                <Dialog onClose={() =>{}} aria-labelledby="simple-dialog-title" open={isModalOpen}>
                    <DialogTitle id="simple-dialog-title">Sucesso</DialogTitle>
                    <Typography style={styles.text}variant="body1" gutterBottom>
                        Seu feedback foi enviado com sucesso!
                    </Typography>
                    <div style={{textAlign: 'right'}}>
                        <Button style={{width: '5rem', margin: '0.5rem'}} onClick={() => this.setState({isModalOpen: false}, () =>  this.props.history.push(`/`))} variant="contained" color="secondary">
                            OK
                        </Button>
                    </div>
                </Dialog>
            </div>
        )
    }
}
