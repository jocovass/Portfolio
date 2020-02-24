import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import SEO from '../seo';
import GlobalStyles from '../styles/globalStyles';

const Wrapper = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
`;

const Layout = ({ children }) => {

    return (
        <Wrapper>
            <ThemeProvider theme={theme}>
                <SEO />
                <GlobalStyles />
                {children}
                <div id='about' style={{margin: '1000px 0', height: '400px', boxShadow: '5px 5px 20px rgba(0,0,0,.1)'}}>about</div>
            </ThemeProvider>
        </Wrapper>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;