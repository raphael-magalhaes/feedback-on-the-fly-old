import React from 'react'
import Paper from '@material-ui/core/Paper';

const styles = {
    container: { 
        margin: '1.5rem',
        padding: '1.5rem',
    },
    image: {
        width: '10rem'
    }
}

const onClick = (history, username) => {
    history.push(`/feedback/${username}`)
}

const PeopleResult = ({name, username, imageURL, history}) => {
    console.log(imageURL)
    return (
        
        <Paper onClick={() => onClick(history, username)} styles={styles.container} elevation={2}>
            <p style={{paddingTop: '1rem'}}>{name}</p>
            <p>{`@${username}`}</p>
            <img style={styles.image} src={imageURL} />
        </Paper>
    )
}

export default PeopleResult
