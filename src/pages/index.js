import React from 'react';
import Layout from '../components/Layout/Layout';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import Footer from '../components/sections/Footer';

const HomePage = (props) => {
    console.log(props)
    return (
        <Layout>
            <Home />
            <Projects />
            <About />
            <Footer />
        </Layout>
    )
};

export default HomePage;