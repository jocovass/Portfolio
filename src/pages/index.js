import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../layouts/index';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import Footer from '../components/sections/Footer';

const HomePage = () => {
    return (
        <PageTransition>
            <Layout>
                <Home />
                <Projects />
                <About />
                <Footer />
            </Layout>
        </PageTransition>
    )
};

export default HomePage;