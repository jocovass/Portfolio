import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import SEO from '../seo';
import GlobalStyles from '../styles/globalStyles';
import Home from '../sections/Home/Home';

const Wrapper = styled.div`
    width: 95%;
    max-width: 1400px;
    margin: 0 auto;
`;

const Layout = ({ children }) => {

    return (
        <Wrapper>
            <ThemeProvider theme={theme}>
                <SEO />
                <Home />
                {children}
                <GlobalStyles />
                <div id='about' style={{margin: '1000px 0', height: '400px'}}>about</div>
            </ThemeProvider>
        </Wrapper>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;