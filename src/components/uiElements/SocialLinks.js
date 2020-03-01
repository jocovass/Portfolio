import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 3rem;
`;

const IconLink = styled.a`
    display: inline-block;
    cursor: pointer;
    padding: 1rem;
    color: var(--clr-primary);
    border: 2px solid var(--clr-accent);
    border-radius: 50%;
    margin: 0 1rem;
    transition: all .3s ease-in-out; 

    &:hover,
    &:focus {
        transform: scale(1.1) translateY(-5px);
        box-shadow: 0 20px 5px rgba(0, 0, 0, .2);
    }
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 2.2rem;
`;

const SocialLinks = () => {
    const { site: { siteMetadata: { social } }} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    social {
                        github
                        instagram
                        linkedin
                        twitter
                    }
                }
            }
        }
    `);
    
    console.log(social);
    return (
        <Wrapper>
            <IconLink href={`https://github.com/${social.github}`} target="_blank">
                <Icon icon={faGithub} />
            </IconLink>
            <IconLink href={`https://instagram.com/${social.instagram}`} target="_blank">
                <Icon icon={faInstagram} />
            </IconLink>
            <IconLink href={`https://github.com/${social.github}`} target="_blank">
                <Icon icon={faLinkedin} />
            </IconLink>
            <IconLink href={`https://github.com/${social.github}`} target="_blank">
                <Icon icon={faTwitter} />
            </IconLink>
        </Wrapper>
    )
};

export default SocialLinks;