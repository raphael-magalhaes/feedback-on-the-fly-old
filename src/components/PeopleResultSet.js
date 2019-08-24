import React from 'react'
import ResultImage from './PeopleResult'

const generateResultImages = (data, history) => {
    return data.map((row, index) => {
        return <ResultImage
            key={index}
            name={row.name}
            username={row.username}
            imageURL={row.imageURL}
            history={history} />
    })
}

const PeopleResultSet = ({data = [], history}) => {
    return (
        <div>
            { generateResultImages(data, history) }
        </div>
    )
}

export default PeopleResultSet
