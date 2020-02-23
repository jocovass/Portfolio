import React from 'react';
import { Link } from 'react-scroll';
import Img from 'gatsby-image';
import styled from 'styled-components';

const LogoLink = styled(Link)`
    cursor: pointer;
`;

const Logo = ({ image }) => {
    return (
        <LogoLink to='home'
              spy={true}
              smooth={true}
              offset={0}>
            <Img fixed={image} />
        </LogoLink>
    )
}

export default Logo;