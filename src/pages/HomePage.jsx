import React from 'react';
import CardKajian from '../components/CardKajian';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <CardKajian />
      <Footer />
    </Layout>
  );
};

export default HomePage;
