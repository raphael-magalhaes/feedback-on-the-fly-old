import React from 'react'

const Profile = props => {
    return (
        <div>

            <Typography style={styles.text}variant="body1" gutterBottom>
                Opa! Você acabou de receber um feedback! =)
            </Typography>
            
            <Typography style={styles.text}variant="body1" gutterBottom>
                De: @raphaelms
            </Typography>

            <Typography style={styles.text}variant="body1" gutterBottom>
                Feedback: O seu cuidado em identificar pontos críticos na determinação clara de objetivos garantiu que a contribuição de um grupo importante na determinação dos níveis de motivação departamental ocorresse com sucesso, muito obrigado!
            </Typography>
        </div>
    )
}

export default Profile
