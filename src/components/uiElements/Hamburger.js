import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: none;
    z-index: 1000;

    @media ${props => props.theme.mq.small} {
        display: block;
        width: 3rem;
        height: 2.8rem;
        cursor: pointer;
        transform: ${props => props.open? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform .25s ease-in-out;
    }
`;

const Line = styled.span`
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--clr-primary);
    position: relative;
    transform: ${props => props.open ? 'translateY(1.3rem) rotate(-45deg)' : 'translateY(0) rotate(0deg)'};
    transition: transform .15s ease-in-out;

    &::before,
    &::after {
        content: '';
        background-color: inherit;
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: transform .15s ease-in-out;
    }

    &::before {
        transform: translateY(1rem);
        display: ${props => props.open ? 'none' : 'block'}
    }

    &::after {
        transform: ${props => props.open ? 'translateY(0) rotate(90deg)' : 'translateY(2rem)'};
    }
`;

const Hamburger = ({ toggle, open }) => {
    console.log(open);
    return (
        <Wrapper onClick={toggle} open={open} className="toggle">
            <Line open={open}/>
        </Wrapper>
    )
};

export default Hamburger;