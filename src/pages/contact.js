import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Home from '../components/sections/Home';

const Wrapper = styled.section`
    height: 100vh;
    min-height: 500px;
    position: relative;
`;

const Contact = () => {
    return (
        <Layout>
            <Wrapper>
                <Header />
            </Wrapper>
        </Layout>
    )
};

export default Contact;