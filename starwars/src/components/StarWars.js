import React from 'react';
import CharacterCard from './CharacterCard'; 
import styled from 'styled-components';

//styling
const SectionContainer = styled.div `
background: grey;
opacity: 0.4;
width: 75%;
margin-left: 12%;
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