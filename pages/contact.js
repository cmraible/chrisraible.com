import React from 'react';
import Head from 'next/head'
import { Box, Heading, Text, Paragraph, Anchor } from 'grommet';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import DiagonalSection from '../components/DiagonalSection';

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>Chris Raible: Contact</title>
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <SiteHeader />
      <Box align="center" justify="center">
      <Box width="medium" pad="medium" align="center" margin={{top: "xlarge"}} border={true} round={true} gap="medium">
        <Box align="center">
          <Heading margin="none">Contact</Heading>
          <Paragraph>If you're interested in working with me, feel free to reach out via email or phone below.</Paragraph>
        </Box>
        <Box gap="medium">
          <Text>Email: <Anchor href="mailto:chris@chrisraible.com">chris@chrisraible.com</Anchor></Text>
          <Text>Phone: (215) 490-3329</Text>
        </Box>
        <SiteFooter />


      </Box>
      </Box>

    </React.Fragment>
  )
}
