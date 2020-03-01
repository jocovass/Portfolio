import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';

const NAV_ITEMS = ['Home', 'Projects', 'About', 'Contact'];

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    height: 100%;

    @media ${props => props.theme.mq.small} {
        flex-direction: column;
        padding: 2rem 0;
    }
`;

const NavItems = ({ mainPage, toggle }) => {

    function renderNavItems() {
        return NAV_ITEMS.map((val) => {
            return <NavItem key={val} nav={val} mainPage={mainPage} toggle={toggle}/>
        })
    }

    return (
        <NavList >
            {renderNavItems()}
        </NavList>
    )
};

export default NavItems;