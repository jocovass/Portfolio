import React from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import styled, { css } from 'styled-components';

const Li = styled.li`
    &:not(:last-of-type) {
        margin-right: .5rem;

        @media ${props => props.theme.mq.small} {
            margin: 0;
            border-bottom: 2px solid rgba(0, 0, 0, .1);
        }
    }
    
`;

const navStyles = css`
    cursor: pointer;
    display: inline-block;
    color: var(--clr-primary);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    height: 100%;
    padding: 3rem 1.5rem 2rem;

    &:hover {
        background-color: rgba(250, 250, 250, .1);
    }

    &.active {
        background-color: var(--clr-accent);
    }

    @media ${props => props.theme.mq.small} {
        display: block;
        padding: 3rem;
        text-align: center;
    }
`;

const GLink = styled(Link)`
    ${navStyles}
`;

const SCLink = styled(ScrollLink)`
    ${navStyles}
`;

function calcOffset() {
    return -(window.innerHeight / 2);
}

const NavItem = ({ nav, mainPage, toggle }) => {
    function renderNavItem() {
        if(mainPage && nav === 'Contact') {
            return (
                <GLink to="/contact" onClick={toggle}>
                    {nav}
                </GLink>
            )
        } else if(!mainPage && nav !== 'Contact') {
            if(nav === 'Home') {
                return (
                    <GLink to="/" onClick={toggle}>
                        {nav}
                    </GLink>
                )
            }
        } else {
            return (
                <SCLink to={nav.toLowerCase()}
                        spy={true} 
                        smooth={true}
                        activeClass='active'
                        offset={calcOffset()}
                        onClick={toggle} >
                    {nav}
                </SCLink>
            );
        }
    }

    return (
        <Li>
            {renderNavItem()}
        </Li>
    );
};

export default NavItem;
