import React from 'react';
import Head from 'next/head'
import { Box, Carousel, Header, Main, ResponsiveContext, Text } from 'grommet';
import SiteHeader from '../components/SiteHeader';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Chris Raible: Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <Main>
        <Carousel>
          <Box>
            Hello 1
          </Box>
          <Box>
            Hello 2
          </Box>
          <Box>
            Hello 3
          </Box>
        </Carousel>
      </Main>
    </React.Fragment>
  )
}
