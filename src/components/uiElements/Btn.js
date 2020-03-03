import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const btnStyle = css`
    display: inline-block;
    cursor: pointer;
    font-size: ${({size}) => size};
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    padding: ${({pad}) => pad};
    margin-left: ${({ kind }) => kind === 'primary' ? `0` : `4rem`};
    background-color: ${({ kind }) => kind === 'primary' ? `var(--clr-accent)` : `transparent`};
    color: var(--clr-primary);
    border: 2px solid transparent;
    border-color: ${({ kind }) => kind === 'primary' ? `var(--clr-accent)` : `var(--clr-primary)`};
    border-radius: 15px 0 15px 0;

    &:hover {
        background-color: ${({ kind }) => kind === 'primary' ? `rgb(191, 7, 4)` : `rgba(250, 250, 250, .1)`};
        border-color: ${({ kind }) => kind === 'primary' ? `rgb(191, 7, 4)` : `var(--clr-primary)`};
    }
`;

const GLink = styled(Link)`
    ${btnStyle}
`;

const ALink = styled.a`
    ${btnStyle}
`;

const Btn = ({ kind, link, path, children, size='1.5rem', pad='1.2rem 2rem', ...rest}) => {
    if(!link) {
        return <GLink kind={kind} to={path} pad={pad} size={size} {...rest}>{children}</GLink>;
    } else {
        return <ALink kind={kind} pad={pad} size={size} {...rest}>{children}</ALink>
    }
};

export default Btn;