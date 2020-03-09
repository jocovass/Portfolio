import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Btn from '../components/uiElements/Btn';

const Wrapper = styled.div`
    flex-basis: 40%;
    margin-bottom: 8rem;

    figcaption {
        margin-top: 2rem;

        svg {
            margin-right: .8rem;
        }
    }

    @media ${props => props.theme.mq.medium} {
        flex-basis: 90%;
        max-width: 500px;
    }
`;

const Title = styled.h3`
    color: var(--clr-accent);
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 1.5rem;
`;

const Image = styled(Img)`
    box-shadow: 5px 5px 5px rgba(0,0,0, .3);
`;

const Project = (props) => {
    const {image, live, source, title} = props.item;

    return (
        <Wrapper>
            <Title>{title}</Title>
            <figure>
                <Image fluid={image.childImageSharp.fluid} alt={title} />
                <figcaption>
                    <Btn kind="primary" 
                         link 
                         href={live}
                         size='1.2rem'
                         pad='1rem 1.4rem'
                         target="_blank"
                         rel="noopener noreferrer">
                             <FontAwesomeIcon icon={faLink}/>
                             Check it live
                        </Btn>
                    <Btn kind="secondary" 
                         link 
                         href={source}
                         size='1.2rem'
                         pad='1rem 1.4rem'
                         target="_blank"
                         rel="noreferrer noopener">
                             <FontAwesomeIcon icon={faGithub}/>
                             Sourcecode
                    </Btn>
                </figcaption>
            </figure>
        </Wrapper>
    );
};

export default Project;