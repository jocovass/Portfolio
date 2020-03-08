import React from 'react';
import styled, { css } from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../layouts/index';
import Header from '../components/Header/Header';
import StyledTitle from '../components/uiElements/Title';
import Footer from '../components/sections/Footer';
import HorizontalLine from '../components/uiElements/horizontalLine';
import { btnStyle } from '../components/uiElements/Btn';


const Wrapper = styled.section`
    position: relative;
    text-align: center;
    padding-top: 11rem;
    overflow: hidden;
`;

const Content = styled.div`
    height: calc(100vh - 37rem);
    min-height: 60rem;
`;

const Form = styled.form`
    width: 90%;
    max-width: 50rem;
    margin: 3rem auto 0;
    font-size: 1.7rem;
`;

const Row = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    text-align: left;
`
const Label = styled.label`
    display: inline-block;
    margin-bottom: .6rem;
    margin-left: 1.2rem;
`;

const inputStyle = css`
    width: 100%;
    padding: .75rem 1rem;
    font-size: 1.5rem;
    border: 2px solid transparent;
    border-radius: 15px 0 15px 0;
    background-color: rgba(255, 255, 255, .6);
`;

const Input = styled.input`
    ${inputStyle}
`;

const Textarea = styled.textarea`
    resize: none;
    ${inputStyle}
`;

const Button = styled.button`
    ${btnStyle}
    font-size: 1.5rem;
    padding: .9rem 2.5rem;
`;

const Contact = () => {
    return (
        <PageTransition
            defaultStyle={{
                transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72',
                left: '100%',
                position: 'absolute',
                width: '100%',
            }}
            transitionStyles={{
                entering: {left: '0%'},
                entered: {left: '0%'},
                exiting: {left: '100%'},
            }}
        >
        <Layout>
            <Wrapper id="contact">
                <Content>
                    <Header />
                    <StyledTitle type="h2">Contact Me</StyledTitle>
                    <HorizontalLine />
                    <Form method="POST" data-netlify="true" name="contact">
                        <Row>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" placeholder="Enter your name..." required/>
                        </Row>
                        <Row>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email..." required/>
                        </Row>
                        <Row>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" type="text" placeholder="Send message..." required rows="10" maxLength="200"></Textarea>
                        </Row>
                        <Row>
                            <Button kind="primary" type="submit">Send</Button>
                        </Row>
                    </Form>
                </Content>
                <Footer />
            </Wrapper>
        </Layout>
        </PageTransition>
    )
};

export default Contact;