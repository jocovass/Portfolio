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
            </ThemeProvider>
        </Wrapper>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;