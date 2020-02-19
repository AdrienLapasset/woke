import React from 'react'
import Layout from 'components/global/Layout'
import Landing from './Landing'
import OurAction from './OurAction'
import Map from './Map/Map.container'
import Carousel from './Carousel'
import ActWithUs from './ActWithUs'
import News from './News'

const Home = () => {
  return (
    <>
      <Layout>
        <Landing />
        <OurAction />
        <Map />
        <Carousel />
        <ActWithUs />
        <News />
      </Layout>
    </>
  );
}

export default Home;
