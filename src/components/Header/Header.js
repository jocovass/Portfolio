import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "images/logo.png"}) {
                childImageSharp {
                    fixed(width: 115, quality: 80) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `);
    
    console.log(data)
    return (
        <Wrapper>
            <Content>
                <Logo image={data.file.childImageSharp.fixed}/>
                <Navigation />
            </Content>
        </Wrapper>
    )
};

export default Header;