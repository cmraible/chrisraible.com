import "animate.css/animate.min.css";
import { Anchor, Avatar, Box, Heading, Paragraph, WorldMap } from 'grommet';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import SiteHeader from '../components/SiteHeader';


const Home = () => {
  
  return (
      <React.Fragment>
        <Head>
          <title>Chris Raible | About</title>
          <meta name="description" content="About Chris." />
        </Head>
        <Box align="center" justify="start" fill>
          <Box fill="horizontal" direction="row-responsive">
            <SiteHeader />
                <Box 
                  background="brand"
                  round={{size: "medium", corner: "top-left"}}                   
                  height={{min: "90vh"}}
                  fill="horizontal"
                  pad="medium"
                >
                  <Box pad={{top: "large"}}>
                    <Heading margin="none">About me</Heading>
                    <Paragraph>
                      I like to write code and help people take advantage of all the internet has to offer. 
                      I believe there is an extraordinary amount of untapped potential on the internet just waiting to be unleashed, for both businesses and individuals.
                    </Paragraph>
                    <Paragraph>
                      <strong>My mission is to help people improve their lives and businesses with code and the internet.</strong>
                    </Paragraph>
                    <Paragraph>
                      Python and JavaScript are my go-to programming languages, but I am technology agnostic and always eager to learn new languages and technologies. 
                    </Paragraph>
                    <Paragraph>
                      I'm a fullstack developer with experience building and running mission critical applications in production at a Fortune 500 company. 
                    </Paragraph>
                    <Paragraph>
                      Reach out if you need help with a website or other project at <Anchor href="mailto:chris@chrisraible.com">chris@chrisraible.com</Anchor>.
                    </Paragraph>
                  </Box>
                </Box>
          </Box>
        </Box>
      </React.Fragment>
  )
}

export default Home;
