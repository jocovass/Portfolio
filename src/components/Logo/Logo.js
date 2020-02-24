import React from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SLink = styled(ScrollLink)`
    cursor: pointer;
`;

const GLink = styled(Link)`
    cursor: pointer;
`;

const Logo = ({ image, onPage }) => {
    if(onPage) {
        return (
            <SLink to='home'
                spy={true}
                smooth={true}
                offset={0}>
                <Img fixed={image} alt="Joco codes site logo" />
            </SLink>
        );
    } else {
        return (
            <GLink to="/">
                <Img fixed={image} alt="Joco codes site logo"/>
            </GLink>
        )
    }
}

export default Logo;