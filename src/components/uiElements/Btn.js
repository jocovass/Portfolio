import React from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

const GLink = styled(Link)`
    display: inline-block;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.2rem 2rem;
    margin-left: ${({ type }) => type === 'primary' ? `0` : `4rem`};
    background-color: ${({ type }) => type === 'primary' ? `var(--clr-accent)` : `transparent`};
    color: var(--clr-primary);
    border: 2px solid transparent;
    border-color: ${({ type }) => type === 'primary' ? `var(--clr-accent)` : `var(--clr-primary)`};
    border-radius: 15px 0 15px 0;

    &:hover {
        background-color: ${({ type }) => type === 'primary' ? `rgb(191, 7, 4)` : `rgba(250, 250, 250, .1)`};
        border-color: ${({ type }) => type === 'primary' ? `rgb(191, 7, 4)` : `var(--clr-primary)`};
    }
`;

const Btn = ({ type, onPage, children }) => {

    return <GLink type={type} to="/contact">{children}</GLink>;
};

export default Btn;