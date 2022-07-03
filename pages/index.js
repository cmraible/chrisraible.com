import "animate.css/animate.min.css";
import { Avatar, Box, Heading, Paragraph } from 'grommet';
import Head from 'next/head';
import React from 'react';
import LatestPosts from '../components/LatestPosts';
import SocialLinks from '../components/SocialLinks';


const Home = () => {


  return (
      <React.Fragment>
        <Head>
          <title>Chris Raible</title>
          <meta name="description" content="" />
        </Head>
        <Box align="center" justify="start" fill>
          <Box fill="horizontal" direction="row-responsive">
                <Box
                  fill="horizontal"
                  pad="medium"
                  height={{min: "90vh"}}
                >
                  <Box direction="row-responsive" gap="medium" pad={{top: "large"}}>
                    <Avatar src="/avatar.jpeg" size="96px" flex={false} />
                    <Box>
                      <Heading margin="none" size="medium">Chris Raible</Heading>
                      <Paragraph>Engineer. Code stuff. Horrible golfer.</Paragraph>
                      <SocialLinks />
                    </Box>
                  </Box>  
                </Box>
                <Box 
                  background="brand"
                  round={{size: "medium", corner: "left"}}                   
                  height={{min: "90vh"}}
                  fill="horizontal"
                  pad={{top: "large"}}
                >
                  <LatestPosts />
                </Box>
          </Box>
        </Box>
      </React.Fragment>
  )
}

export default Home;
