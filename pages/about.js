import React from 'react';
import Head from 'next/head'
import { Box, Heading, Main, ResponsiveContext, Text } from 'grommet';
import SiteHeader from '../components/SiteHeader';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Chris Raible: About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <Main pad="xlarge" align="center">
        <Box width="large">
          <Heading>About Chris</Heading>
        </Box>
      </Main>
    </React.Fragment>
  )
}
