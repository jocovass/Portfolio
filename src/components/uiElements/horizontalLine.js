import React from 'react';
import styled from 'styled-components';

const Line = styled.span`
    display: block;
    width: 9rem;
    height: 1px;
    margin: 3rem auto 6rem;
    background-color: var(--clr-primary);
`;

const HorizontalLine = () => <Line />;

export default HorizontalLine;