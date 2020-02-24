import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Btn from '../components/uiElements/Btn';

const Wrapper = styled.div`
    flex-basis: 40%;
    margin-bottom: 8rem;
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

const Fig = styled.figure`
    
`;

const FigCap = styled.figcaption`
    margin-top: 1.5rem;
`;

const Project = (props) => {
    const {image, live, source, title} = props.item;

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Fig>
                <Image fluid={image.childImageSharp.fluid} alt={title} />
                <FigCap>
                    <Btn type="primary" 
                         link 
                         href={live}
                         size='1.2rem'
                         pad='.75rem 1.5rem'>Check it live</Btn>
                    <Btn type="secondary" 
                         link 
                         href={source}
                         size='1.2rem'
                         pad='.75rem 1.5rem'>Sourcecode</Btn>
                </FigCap>
            </Fig>
        </Wrapper>
    );
};

export default Project;