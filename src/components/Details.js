import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../images/jarjar.jpeg'

export default function Details(props) {
    const { close, currentCharacterData} = props
    const [details, setDetails] = useState(null)

    useEffect(() => {
        setDetails(currentCharacterData)
    },[currentCharacterData])

    const DetailsBox = styled.div`
    border:solid;
    height: 40vw;
    width: 50%;
    background-image: url(${img});
    background-size: 150%;
    color: white;
    font-size: 1.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    const ButtonStyles = styled.button`
    height: 5vw;
    width: 5vw;
    `
    return (details &&
    <DetailsBox>
        <h2>{details.name}</h2>
        <p>{`Birth Year: ${details.birth_year}`}</p>
        <p>{`Hair Color: ${details.hair_color}`}</p>
        <p>{`First Appearance: ${details.films[0]}`}</p>
        <p>{`Final Appearance: ${details.films[details.films.length -1]}`}</p>

        <ButtonStyles onClick={close}>Close</ButtonStyles>
    </DetailsBox>)
}