import React, {useState, useEffect} from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

function CharacterGrid (){
const [character, setCharacter] = useState([]);

useEffect(() => {
    axios
        .get('https://swapi.co/api/people/')
        .then (response => {
            console.log(response);
            setCharacter(response.data.results);
        })
}, [])

const CharGrid = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

return (
    <CharGrid>
        {Array.from(character).map((character, index) => {
            return (
                <CharacterCard
                    key = {index}
                    name = {character.name}
                    birthYear = {character.birth_year}
                    mass = {character.mass}
                    height = {character.height} 
                />)
        })}
    </CharGrid>
)
}

export default CharacterGrid
