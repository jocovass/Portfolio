import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems/NavItems';

const Nav = styled.nav`
    height: 100%;
    
    @media ${props => props.theme.mq.small} {
        display: none;
`;

const DesktopNav = ({ mainPage }) => {
    return (
        <Nav>
            <NavItems mainPage={mainPage} />
        </Nav>
    );
};

export default DesktopNav;