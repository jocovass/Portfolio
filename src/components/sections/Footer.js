import React from 'react';
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SocialLinks from '../uiElements/SocialLinks';

const Wrapper = styled.footer`
    text-align: center;
    padding: 8rem 0 2rem;
    font-style: italic;
`;

const Copy = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
`;

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "images/logo.png"}) {
                childImageSharp {
                    fixed(width: 115, quality: 80) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `);

    return (
        <Wrapper>
            <SocialLinks />
            <Img fixed={data.file.childImageSharp.fixed}/>
            <Copy>2020&copy; Jozsef Vass</Copy>
        </Wrapper>
    );
};

export default Footer;