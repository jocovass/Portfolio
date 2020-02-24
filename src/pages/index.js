import React from 'react';
import Layout from '../components/Layout/Layout';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';

const HomePage = () => {
    return (
        <Layout>
            <Home />
            <Projects />
            <About />
        </Layout>
    )
};

export default HomePage;