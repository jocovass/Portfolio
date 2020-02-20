import React from 'react';
import styled from 'styled-components';
import Header from '../../Header/Header';

const Wrapper = styled.section`
    height: 80vh;
`;

const Home = () => {
    return (
        <Wrapper id="home">
            <Header />
        </Wrapper>
    )
}

export default Home;