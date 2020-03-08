import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/index';
import Header from '../components/Header/Header';
import notFound from '../images/notfound.svg';
import Btn from '../components/uiElements/Btn';

const Content = styled.div`
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        line-height: 1.5;
        margin-bottom: 3rem;
    }
`;

const Svg = styled.img`
  max-width: 100%;
  height: 30vh;
  margin-bottom: 7rem;
`;


const NotFound = () => {
    return (
        <Layout>
            <Content>
                <Header error />
                <h1>Opps! The page you are looking for does not exist!</h1>
                <Svg src={notFound}></Svg>
                <Btn kind="primary"
                     path="/">Go Back</Btn>
            </Content>
        </Layout>
    )
};

export default NotFound;