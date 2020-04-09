import React from 'react';
import CharacterCard from './CharacterCard'; 
import styled from 'styled-components';

//styling
const SectionContainer = styled.div `
width: 50%;
margin-left: 25%;
`;

const CharacterInfo = props => {

    return (

    <SectionContainer> 
        {props.characters.map((star, index) => (
        <CharacterCard
        star={star} key={index}/>
        ))}
    </SectionContainer>
    );
}

export default CharacterInfo;