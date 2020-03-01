import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems/NavItems';

const Nav = styled.nav`
    transition: all 300ms ease-in-out;
    
    @media ${props => props.theme.mq.small} {
        box-shadow: 0 5px 5px rgba(0,0,0, .3);
        background-color: var(--clr-secondary);
        position: absolute;
        z-index: -1;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0;
        overflow: hidden;

        
        &.open-enter {
            height: 0;
        }
    
        &.open-enter-active {
            opacity: 1;
            height: 35rem;
        }

        &.open-enter-done {
            opacity: 1;
            height: 35rem;
        }
    
        &.open-exit {
            opacity: 1;
            height: 35rem;
        }
    
        &.open-exit-active {
            opacity: 0;
            height: 0;
        }

        &.open-exit-done {
            opacity: 0;
            height: 0;
        }
    }
`;

const MobileNav = ({ mainPage, toggle }) => {

    return (
        <Nav>
            <NavItems mainPage={mainPage} toggle={toggle}/>
        </Nav>
    );
};

export default MobileNav;