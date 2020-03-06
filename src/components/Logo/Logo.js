import React from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const SLink = styled(ScrollLink)`
    cursor: pointer;
    width: 11rem;
`;

const GLink = styled(Link)`
    cursor: pointer;
    width: 11rem;
`;

const Logo = ({ mainPage }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "images/logo.png"}) {
                childImageSharp {
                    fluid(maxWidth: 115, quality: 75) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `);
    
    if(mainPage) {
        return (
            <SLink to='home'
                spy={true}
                smooth={true}
                offset={0}>
                <Img fluid={data.file.childImageSharp.fluid} alt="Joco codes site logo" />
            </SLink>
        );
    } else {
        return (
            <GLink to="/">
                <Img fluid={data.file.childImageSharp.fluid} alt="Joco codes site logo"/>
            </GLink>
        )
    }
}

export default Logo;