import React from 'react';
import Layout from '../components/Layout/Layout';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';

const HomePage = () => {
    return (
        <Layout>
            <Home />
            <Projects />
        </Layout>
    )
};

export default HomePage;