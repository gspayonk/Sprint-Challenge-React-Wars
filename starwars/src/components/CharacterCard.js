import React from 'react';
import styled from 'styled-components';

//section separation
const IndividualSection = styled.div `
    border: 2px solid black;
    margin-bottom: 3%;
    background: white;

`

function CharacterCard (props) {
    
    return (
        <div className = 'mainCard'>
            <IndividualSection>
                <h1 className='name'>{props.star.name}</h1>
                    <div className='personalinfo'>
                        <p>Gender: {props.star.gender}</p>
                        <p>Birth Year: {props.star.birth_year}</p>
                        <p>Eye Color: {props.star.eye_color}</p>
                        <p>Mass: {props.star.mass}</p>
                        <p>Skin color: {props.star.skin_color}</p>
                        <p>Height: {props.star.height} cm</p>
                        <p>Hair Color: {props.star.hair_color}</p>
                    </div>
            </IndividualSection>
        </div>
    );

};

export default CharacterCard;