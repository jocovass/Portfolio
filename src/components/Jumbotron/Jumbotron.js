import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import StyledTitle from '../uiElements/Title';
import Btn from '../uiElements/Btn';


const ImgBackground = styled(BackgroundImage)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 45rem;
    margin-top: 7.4rem;
    transform: translate(-50%, -50%);
    border-radius: 55px 0 55px 0;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, .2) , -2px -2px 15px rgba(0, 0, 0, .1);

    &::before,
    &::after {
        border-radius: 55px 0 55px 0;
    }
`;

const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, .99);
    border-radius: 53px 0 53px 0;
    z-index: -2;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 4rem;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 8rem;
    transform: translateY(-50%);
`;

const Jumbotron = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "images/bg.jpg" }) {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
            }
        }
    `);

    return (
            <ImgBackground Tag='div'
                fluid={data.file.childImageSharp.fluid}
                backgroundColor='#040e18'>
                <BackgroundOverlay>
                    <Content>
                    <Title>
                        Hello, I am 
                        <br />
                        <StyledTitle type='span'>Jozsef Vass</StyledTitle>
                        <br />
                        Self taught Front-end Developer, based in Liverpool
                    </Title>
                    <Btn type='primary' >Get In Touch</Btn>
                    <Btn type='secondary'>Get In Touch</Btn>
                    </Content>
                </BackgroundOverlay>
            </ImgBackground>
    );
};

export default Jumbotron;