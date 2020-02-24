import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const style = css`
    display: inline-block;
    cursor: pointer;
    font-size: ${({size}) => size};
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    padding: ${({pad}) => pad};
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

const GLink = styled(Link)`
    ${style}
`;

const ALink = styled.a`
    ${style}
`;

const Btn = ({ type, link, children, size='1.5rem', pad='1.2rem 2rem', ...rest}) => {
    if(!link) {
        return <GLink type={type} to="/contact" pad={pad} size={size} {...rest}>{children}</GLink>;
    } else {
        return <ALink type={type} pad={pad} size={size} {...rest}>{children}</ALink>
    }
};

export default Btn;