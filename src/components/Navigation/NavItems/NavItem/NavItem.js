import React from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

const Li = styled.li`
    &:not(:last-of-type) {
        margin-right: .5rem;
    }
`;

const SCLink = styled(ScrollLink)`
    cursor: pointer;
    display: inline-block;
    font-size: 1.2rem;
    text-transform: uppercase;
    height: 100%;
    padding: 3rem 1.5rem 2rem;

    &:hover {
        background-color: rgba(250, 250, 250, .1);
    }

    &.active {
        background-color: var(--clr-accent);
    }
`;

function calcOffset() {
    return -(window.innerHeight / 2);
}

const NavItem = ({ nav }) => (
    <Li>
        <SCLink to={nav.toLowerCase()}
                spy={true} 
                smooth={true}
                activeClass='active'
                offset={calcOffset()} >
            {nav}
        </SCLink>
    </Li>
);

export default NavItem;
