import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import StyledTitle from '../uiElements/Title';
import HorizontalLine from '../uiElements/horizontalLine';
import Project from '../../templates/Project';

const Wrapper = styled.section`
    text-align: center;
    margin-bottom: 3rem;
`;

const Content = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const Projects = () => {
    const { allFile: { edges }} = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                sourceInstanceName: { eq: "src" }
                extension: { eq: "md" }
                relativeDirectory: { regex: "/projects/"}
                }
                sort: { fields: [dir], order: DESC }
              ) {
                edges {
                    node {
                        childMarkdownRemark {
                            frontmatter {
                                title
                                live
                                source
                                image {
                                    childImageSharp {
                                        fluid(maxWidth: 800, quality: 75) {
                                            ...GatsbyImageSharpFluid_tracedSVG
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    function renderProjects() {
        return edges.map((val, index) => {
            return <Project key={val.node.childMarkdownRemark.id} 
                            item={val.node.childMarkdownRemark.frontmatter} />;
        });
    }

    return (
        <Wrapper id="projects">
            <StyledTitle type="h2">My Projects</StyledTitle>
            <HorizontalLine />
            <Content>
                {renderProjects()}
            </Content>
        </Wrapper>
    )
};

export default Projects;