import React, { useEffect, useState } from 'react';
import "animate.css/animate.min.css";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundParticles from '../components/BackgroundParticles';
import DiagonalSection from '../components/DiagonalSection';
import { Anchor, Box, Card, CardHeader, CardBody, CardFooter, Heading, Paragraph, Text, Stack } from 'grommet';
import {
  FormNextLink, FormDown
} from 'grommet-icons';
import Emoji from 'a11y-react-emoji';


const Home = () => {

  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(window.outerHeight*.8);
    window.addEventListener('resize', (e) => {
      setHeight(e.target.outerHeight*.8)
    })
  }, []);

  return (
      <React.Fragment>
        <Head>
          <title>Chris Raible</title>
          <meta name="description" content="Project manager by day; full-stack developer by night. I like building data-driven applications to solve problems for people." />
        </Head>
        <Box align="center" justify="start" fill="horizontal">
          <Box height={'80vh'} fill="horizontal">
            <Stack guidingChild="last" fill>
                <BackgroundParticles height={height} />
                <Box animation={{type: 'slideUp', duration: 1000, size: "medium"}} pad="xlarge" fill>
                  <Box direction="row-responsive" gap="medium" align="start" justify="center" fill pad="xlarge" background={{color: "white", opacity: 0.5}}>
                    <Box round="full" width="150px" height="150px" style={{overflow: 'hidden'}}>
                      <Image
                        src="/avatar.jpeg"
                        width={150}
                        height={150}
                      />
                    </Box>
                    <Box>
                      <Heading margin="none" size="large">Hi, I'm Chris.</Heading>
                      <Paragraph>
                        Project manager by day; full-stack developer by night. I like building data-driven applications to solve problems for people.
                      </Paragraph>
                      <Paragraph>
                        Outside of my day job, I spend most of my time these days building <Anchor><Link href="https://routineops.com">RoutineOps</Link></Anchor> — a tool for teams to schedule recurring tasks to get shit done.
                      </Paragraph>
                    </Box>
                  </Box>

                </Box>

            </Stack>
          </Box>
          {/* <Box align="center" justify="end">
            <Text color="dark-4">Scroll</Text>
            <FormDown color="dark-4" />
          </Box> */}
            <DiagonalSection background="#272614">

            </DiagonalSection>
        </Box>
      </React.Fragment>
  )
}

export default Home;
