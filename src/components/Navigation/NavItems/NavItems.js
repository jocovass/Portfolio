import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';

const NAV_ITEMS = ['Home', 'Projects', 'About', 'Contact'];

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    height: 100%;
`;

const NavItems = ({ mainPage }) => {

    function renderNavItems() {
        return NAV_ITEMS.map((val, i) => {
            return <NavItem key={val} nav={val} mainPage={mainPage} />
        })
    }

    return (
        <NavList>
            {renderNavItems()}
        </NavList>
    )
};

export default NavItems;