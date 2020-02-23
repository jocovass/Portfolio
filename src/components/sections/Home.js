import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Jumbotron from '../Jumbotron/Jumbotron';

const Wrapper = styled.section`
    height: 80vh;
    min-height: 500px;
    position: relative;
`;

const Home = () => {
    return (
        <Wrapper id="home">
            <Header />
            <Jumbotron />
        </Wrapper>
    )
}

export default Home;