import React from 'react';
import Head from 'next/head'
import { Box, Heading, Paragraph } from 'grommet';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import DiagonalSection from '../components/DiagonalSection';

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>Chris Raible: About</title>
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <SiteHeader />
      <Box fill="horizontal" align="center" margin={{top: "xlarge"}}>
        <Heading>About</Heading>
        <DiagonalSection background={'#DDDDDD'}>
          <Heading>Bio</Heading>
          <Paragraph>
            As a trained industrial engineer and lean practitioner, I work with my clients to deliver efficient, robust business solutions that delight their customers.
          </Paragraph>
          <Paragraph>
            Raised on the internet, I've been designing and building interactive websites as a hobby since 2007.
          </Paragraph>
          <Paragraph>
            Always an engineer at heart, I studied Industrial Engineering at Virginia Tech and began my career in the Manufacturing Industry in 2017.
          </Paragraph>
          <Paragraph>
            In 2018, I moved across the country to join Tesla at their factory in Fremont, California. I started as a Data Analyst, and built data-driven websites and tools for process engineers and production teams.
          </Paragraph>
          <Paragraph>
            Now, I combine my skills as an industrial engineer and web developer to create efficient business processes for my clients and their customers.
          </Paragraph>
        </DiagonalSection>
        <DiagonalSection background="#FFFFFF">
          <Heading>Web Development</Heading>
          <Paragraph>
            I am a full-stack web developer — that means I can work on anything from the UI Design of a web site to the backend business logic of a business critical application.
          </Paragraph>
          <Paragraph>
            I tend to write code in Python for backend development, and ReactJS for frontend development, but I am always eager to learn news tools or integrate with new systems.
          </Paragraph>
        </DiagonalSection>
        <DiagonalSection background="#8B1F41">
          <Heading>Industrial Engineering</Heading>
          <Paragraph>
              I studied Industrial Engineering at Virginia Tech, which launched me into a career in manufacturing and operations.
          </Paragraph>
          <Paragraph>
              Immediately after school, I worked for a company called Wolverine Advanced Materials, which was undergoing a drastic lean transformation.
          </Paragraph>
          <Paragraph>
              I had always admired Tesla for its mission, products, and ambition, so I jumped at the opportunity to move across the country to help launch the Model 3. I spent about 3 years at Tesla building internal web tools before leaving Tesla to start my own company.
          </Paragraph>
        </DiagonalSection>
        <SiteFooter />

      </Box>
    </React.Fragment>
  )
}
