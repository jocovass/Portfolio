import React from 'react';
import styled from 'styled-components';

const UnderLine = styled.span`
    position: absolute;
    left: 0;
    bottom: .75rem;
    width: 105%;
    height: .7rem;
    background-color: var(--clr-accent);
    z-index: -1;
`;


const title = ({type, children}) => {
    const StyledTitle = styled[type]`
        display: inline-block;
        font-size: 4rem;
        font-weight: 900;
        position: relative;
        margin: .75rem 0 1.5rem;
    `;

    return (
        <StyledTitle>
            {children}
            <UnderLine />
        </StyledTitle>
    );
};

export default title;