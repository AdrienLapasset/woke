import React from 'react'
import Landing from './Landing'
import OurAction from './OurAction'
import Layout from 'components/global/Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <Landing />
        <OurAction />
      </Layout>
    </>
  );
}

export default Home;
