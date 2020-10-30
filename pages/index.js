import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import DiagonalSection from '../components/DiagonalSection';
import { Box, Carousel, Heading, Main, ResponsiveContext, Text, Paragraph } from 'grommet';
import SiteHeader from '../components/SiteHeader';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Chris Raible: Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <Box align="center" justify="start">
        <Box pad="medium" margin={{top: "xlarge"}} fill>
          <Heading size="xlarge">Business solutions for the modern web.</Heading>
          <Paragraph></Paragraph>
        </Box>

        <DiagonalSection background="#000040">
          <Heading>Marketing Websites</Heading>
          <Paragraph>Make your first impression count.</Paragraph>
        </DiagonalSection>


        <DiagonalSection background="#FFFFFF">
          <Heading>Ecommerce</Heading>
          <Paragraph>List products, accept orders and payments online.</Paragraph>
        </DiagonalSection>

        <DiagonalSection background="#CCCCCC">
          <Heading>Enterprise Integration</Heading>
          <Paragraph></Paragraph>
        </DiagonalSection>

        <DiagonalSection background="#FFFFFF">
          <Heading>Analytics</Heading>
          <Paragraph></Paragraph>
        </DiagonalSection>

      </Box>

    </React.Fragment>
  )
}
