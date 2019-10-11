import React from 'react';
import styled from 'styled-components';

const CharCard = styled.div `
    Background: #DCC58B;
    width: 30%;
    border: 4px solid #A2D1F3;
    border-radius: 4px;
    margin-top: 5%;
`

const CharacterCard = props => {
    return (
        <CharCard>
            <h3>{props.name}</h3>
            <p>Birth Year: {props.birthYear}</p>
            <p>Mass: {props.mass}</p>
            <p>Height: {props.height}</p>
        </CharCard>
    )
}

export default CharacterCard