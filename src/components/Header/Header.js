import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/MobileNav';
import Hamburger from '../uiElements/Hamburger';
import DesktopNav from '../Navigation/DesktopNav';


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
    background-color: var(--clr-secondary);
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding: 0 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = ({ mainPage, error }) => {
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);

    function checkWindowSize() {
        window.matchMedia('(max-width: 37.5em)').matches ? setMobile(true) : setMobile(false); 
    }

    useEffect(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
            setMobile(false);
        };
    }, [])

    const toggle = () => {
        setOpen(!open);
    }

    function renderNav() {
        if(error){
            return null;
        } else if(mobile) {
            return (
                <>
                    <Hamburger open={open} toggle={toggle}/>
                    <CSSTransition in={open}
                        timeout={200}
                        classNames="open"
                        unmountOnExit
                        appear>
                        <Navigation mainPage={mainPage} toggle={toggle} />
                    </CSSTransition>
                </>
            );
        } else {
            return <DesktopNav mainPage={mainPage} />;
        }
    }

    return (
        <Wrapper>
            <Content>
                <Logo mainPage={mainPage} />
                { renderNav() }
            </Content>
        </Wrapper>
    )
};

export default Header;