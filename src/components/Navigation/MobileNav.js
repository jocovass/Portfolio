import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems/NavItems';

const Nav = styled.nav`
    transition: all 200ms ease-in-out;
    
    box-shadow: 0 5px 5px rgba(0,0,0, .3);
    background-color: var(--clr-secondary);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;

    
    &.open-enter {
        height: 0;
    }

    &.open-enter-active {
        height: ${props => props.mainPage ? '35rem' : '22rem'};
    }

    &.open-enter-done {
        height: ${props => props.mainPage ? '35rem' : '22rem'};
    }

    &.open-exit {
        height: ${props => props.mainPage ? '35rem' : '22rem'};
    }

    &.open-exit-active {
        height: 0;
    }

    &.open-exit-done {
        height: 0;
    }
`;

const MobileNav = ({ mainPage, toggle }) => {

    return (
        <Nav mainPage={mainPage}>
            <NavItems mainPage={mainPage} toggle={toggle}/>
        </Nav>
    );
};

export default MobileNav;