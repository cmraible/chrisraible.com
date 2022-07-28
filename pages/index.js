import "animate.css/animate.min.css";
import { Box } from 'grommet';
import Head from 'next/head';
import React from 'react';
import LatestPosts from '../components/LatestPosts';
import SiteHeader from '../components/SiteHeader';
import SiteLinks from '../components/SiteLinks';


const Home = () => {
  
  return (
      <React.Fragment>
        <Head>
          <title>Chris Raible</title>
          <meta name="description" content="" />
        </Head>
        <Box align="center" justify="start" fill>
          <Box fill="horizontal" direction="row-responsive" height={{min: '100vh'}}>
            <SiteHeader />
            <Box 
              background="brand"
              round={{size: "medium", corner: "top-left"}}                   
              fill="horizontal"
              pad="medium"
            >
              <SiteLinks />
            </Box>
          </Box>
        </Box>
      </React.Fragment>
  )
}

export default Home;
