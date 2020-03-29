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
    transform: translate(-50%, -50%);
    width: 80%;
    height: 45rem;
    margin-top: 7.4rem;
    border-radius: 55px 0 55px 0;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, .2) , -2px -2px 15px rgba(0, 0, 0, .1);

    &::before,
    &::after {
        border-radius: 55px 0 55px 0;
    }

    @media ${props => props.theme.mq.medium} {
        width: 95%;
    }

    @media ${props => props.theme.mq.small} {
        height: 40rem;
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

    div {
        position: absolute;
        top: 50%;
        left: 8rem;
        transform: translateY(-50%);

        @media ${props => props.theme.mq.small} {
            left: 3rem;
        }
    }

    h1 {
        font-size: 1.8rem;
        font-weight: inherit;
        margin-bottom: 4rem;
    }
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
                    <div>
                        <h1>
                            Hello, I am
                            <br />
                            <StyledTitle type='span'>Jozsef Vass</StyledTitle>
                            <br />
                            Self taught Front-end Developer, based in Liverpool
                        </h1>
                        <Btn kind='primary' path="/contact">Get In Touch</Btn>
                        <Btn kind='secondary' path="./cv.pdf" download link>Curriculum</Btn>
                    </div>
                </BackgroundOverlay>
            </ImgBackground>
    );
};

export default Jumbotron;