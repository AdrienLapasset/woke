import React from 'react'
import Layout from 'components/global/Layout'
import Landing from './Landing'
import OurAction from './OurAction'
import Map from './Map/Map.container'
import Carousel from './Carousel'

const Home = () => {
  return (
    <>
      <Layout>
        <Landing />
        <OurAction />
        <Map />
        <Carousel />
      </Layout>
    </>
  );
}

export default Home;
