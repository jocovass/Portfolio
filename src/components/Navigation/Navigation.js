import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems/NavItems';

const Nav = styled.nav`
    height: 100%;
`;

const Navigation = () => {

    return (
        <Nav>
            <NavItems />
        </Nav>
    );
};

export default Navigation;