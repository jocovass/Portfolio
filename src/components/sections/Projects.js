import React from 'react';
import styled from 'styled-components';
import Title from '../uiElements/Title';
import HorizontalLine from '../uiElements/horizontalLine';

const Wrapper = styled.section`
    text-align: center;
`;

const Projects = () => {

    return (
        <Wrapper id="projects">
            <Title type="h2">My Projects</Title>
            <HorizontalLine />
        </Wrapper>
    )
};

export default Projects;