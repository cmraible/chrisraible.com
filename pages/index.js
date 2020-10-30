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
          <Box direction="row-responsive" fill="horizontal" justify="between">
            <Box>
              <Heading>Marketing Websites</Heading>
              <Paragraph>Reach your customers with a custom website.</Paragraph>
            </Box>
            <Box>
              <Image
                style={{zIndex: '-1'}}
                src="/website_drawing.svg"
                width={600}
                height={600}
              />
            </Box>
          </Box>
        </DiagonalSection>


        <DiagonalSection background="#FFFFFF">
        <Box direction="row-responsive" fill="horizontal" justify="between">
            <Box>
              <Heading>Ecommerce</Heading>
              <Paragraph>List products, accept orders and payments online.</Paragraph>
            </Box>
            <Box>
              <Image
                src="/ecommerce_drawing.svg"
                width={600}
                height={600}
              />
            </Box>
          </Box>
        </DiagonalSection>

        <DiagonalSection background="#CCCCCC">
          <Box direction="row-responsive" fill="horizontal" justify="between">
            <Box>
            <Heading>Enterprise Integration</Heading>
            <Paragraph>Integrate with the tools you already use.</Paragraph>
            </Box>
            <Box>
              <Image
                style={{zIndex: '-1'}}
                src="/enterprise_drawing.svg"
                width={600}
                height={600}
              />
            </Box>
          </Box>

        </DiagonalSection>

        <DiagonalSection background="#FFFFFF">
        <Box direction="row-responsive" fill="horizontal" justify="between">
          <Box>
            <Heading>Analytics</Heading>
            <Paragraph>Understand your customers better.</Paragraph>
          </Box>
            <Box>
              <Image
                style={{zIndex: '-1'}}
                src="/analytics_drawing.svg"
                width={600}
                height={600}
              />
            </Box>
          </Box>

        </DiagonalSection>

      </Box>

    </React.Fragment>
  )
}
