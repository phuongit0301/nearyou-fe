import React from 'react';
import { Navbar } from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
        </>
    );
};

export default Home;