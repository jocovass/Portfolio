import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import StyledTitle from '../uiElements/Title'
import HorizontalLine from '../uiElements/horizontalLine';
import Btn from '../uiElements/Btn';

const Wrapper = styled.section`
    text-align: center;
    margin-bottom: 3rem;
`;

const Content = styled.div`
    width: 95%;
    max-width: 70rem;
    margin: 0 auto 4.5rem;

    & > p {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 1.4;
        margin-bottom: 2rem;
    }
`;

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "content/about/about.md" }) {
                childMarkdownRemark {
                    html
                }
            }
        }
    `);

    return (
        <Wrapper id="about">
            <StyledTitle type="h2">About Me</StyledTitle>
            <HorizontalLine />
            <Content dangerouslySetInnerHTML={{__html: data.file.childMarkdownRemark.html}}></Content>
            <Btn kind="primary" size="1.3rem" path="/contact">Hire Me</Btn>
            <Btn kind="secondary" path="./cv.pdf" size="1.3rem" download link>Curriculum</Btn>
        </Wrapper>
    );
};

export default About;