import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';


const Wrapper = styled.header`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 7.4rem;
    background-color: var(--clr-secondary);
    box-shadow: 0 5px 5px rgba(0,0,0, .3);
`;
    
const Content = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = ({ onPage }) => {
    
    return (
        <Wrapper>
            <Content>
                <Logo onPage={onPage}/>
                <Navigation />
            </Content>
        </Wrapper>
    )
};

export default Header;