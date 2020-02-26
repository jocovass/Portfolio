import React from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const SLink = styled(ScrollLink)`
    cursor: pointer;
`;

const GLink = styled(Link)`
    cursor: pointer;
`;
const Logo = ({ onPage }) => {
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

    if(onPage) {
        return (
            <SLink to='home'
                spy={true}
                smooth={true}
                offset={0}>
                <Img fixed={data.file.childImageSharp.fixed} alt="Joco codes site logo" />
            </SLink>
        );
    } else {
        return (
            <GLink to="/">
                <Img fixed={data.file.childImageSharp.fixed} alt="Joco codes site logo"/>
            </GLink>
        )
    }
}

export default Logo;