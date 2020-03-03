import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import notFound from '../images/notfound.svg';
import Btn from '../components/uiElements/Btn';

const Content = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Svg = styled.img`
  max-width: 100%;
  height: 30vh;
  margin-bottom: 10rem;
`;


const NotFound = () => {
    return (
        <Layout>
            <Content>
                <Header error />
                <Svg src={notFound}></Svg>
                <Btn kind="primary"
                     path="/">Go Back</Btn>
            </Content>
        </Layout>
    )
};

export default NotFound;