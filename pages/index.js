import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import BackgroundParticles from '../components/BackgroundParticles';
import DiagonalSection from '../components/DiagonalSection';
import { Box, Heading, Paragraph, Stack } from 'grommet';
import {
  FormNextLink
} from 'grommet-icons';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Web Design and Web Development: Chris Raible</title>
        <meta name="description" content="Chris Raible is a web developer and industrial engineer." />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <Box align="center" justify="start">
        <Box>
          <Stack>
            <BackgroundParticles />
            <Box pad="medium" margin={{top: "xlarge"}}>
              <Heading size="xlarge">Business solutions for the modern web.</Heading>
            </Box>
          </Stack>
        </Box>

        <DiagonalSection background="#000040">
          <Box direction="row-responsive" fill="horizontal" justify="between">
            <Box>
              <Heading>Marketing Websites</Heading>
              <Paragraph size="xlarge">Impress your customers with an eye-catching website.</Paragraph>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Fast, reliable, and responsive website design</Paragraph></Box>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Custom domain name, or bring-your-own</Paragraph></Box>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Publish images, videos, testimonials, stories, etc.</Paragraph></Box>
            </Box>
            <Box>
              <Image
                style={{zIndex: '-1'}}
                src="/website_drawing.svg"
                alt="Marketing website graphic"
                width={600}
                height={600}
              />
            </Box>
          </Box>
        </DiagonalSection>


        <DiagonalSection background="#FFFFFF">
        <Box direction="row-responsive" fill="horizontal" justify="between">
            <Box>
              <Heading>E-commerce</Heading>
              <Paragraph size="xlarge">Do business online.</Paragraph>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Publish your product catalog online</Paragraph></Box>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Accept customer orders and payments online</Paragraph></Box>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Own the entire customer experience</Paragraph></Box>
            </Box>
            <Box>
              <Image
                src="/ecommerce_drawing.svg"
                alt="E-commerce graphic"
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
              <Paragraph size="xlarge">Integrate with the tools you use today.</Paragraph>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Manage customer orders and inventory levels </Paragraph></Box>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Integrate with popular cloud tools Google Workspace or Microsoft Outlook</Paragraph></Box>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Share data between your website and ERP system</Paragraph></Box>
              <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Include add-ons like live chat through Intercom</Paragraph></Box>

            </Box>
            <Box>
              <Image
                style={{zIndex: '-1'}}
                src="/enterprise_drawing.svg"
                alt="Enterprise integrations graphic"
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
            <Paragraph size="xlarge">Understand your customer.</Paragraph>
            <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Integrate with any number of analytics tools (Google Analytics, Segment, Mixpanel)</Paragraph></Box>
            <Box align="center" direction="row" gap="medium"><FormNextLink /><Paragraph>Measure important metrics, like conversion rates </Paragraph></Box>

          </Box>
            <Box>
              <Image
                style={{zIndex: '-1'}}
                src="/analytics_drawing.svg"
                alt="Analytics graphic"
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
