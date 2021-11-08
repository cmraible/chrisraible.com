import "animate.css/animate.min.css";
import Head from 'next/head';
import React from 'react';
import ReactHex from '../components/ReactHex';

const Home = () => {

  return (
      <React.Fragment>
        <Head>
          <title>Chris Raible</title>
          <meta name="description" content="" />
        </Head>
        <ReactHex />
      </React.Fragment>
  )
}

export default Home;
