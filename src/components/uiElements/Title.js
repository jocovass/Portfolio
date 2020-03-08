import React from 'react';
import styled, { css } from 'styled-components';

const UnderLine = styled.span`
    position: absolute;
    left: 0;
    bottom: .75rem;
    width: 105%;
    height: .7rem;
    background-color: var(--clr-accent);
    z-index: -1;
`;

const titleStyle = css`
    display: inline-block;
    font-size: 3.8rem;
    font-weight: 900;
    position: relative;
    margin: .75rem 0 1.5rem;
`;

const H1 = styled.h1`
    ${titleStyle}
`;

const H2 = styled.h2`
    ${titleStyle}
`;

const Span = styled.span`
    ${titleStyle}
`;


const Title = ({type, children}) => {
    function renderTitle() {
        if(type === 'h1') {
            return <H1>
                    {children}
                    <UnderLine />
                </H1>;
        } else if(type === 'h2') {
            return <H2>
                    {children}
                    <UnderLine />
                </H2>; 
        } else if(type === 'span') {
            return <Span>
                    {children}
                    <UnderLine />
                </Span>;
        }
    }

    return renderTitle();
};

export default Title;