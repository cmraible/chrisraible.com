import "animate.css/animate.min.css";
import { Anchor, Avatar, Box, Heading, Paragraph, Stack } from 'grommet';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import BackgroundParticles from '../components/BackgroundParticles';
import DiagonalSection from '../components/DiagonalSection';
import { posts } from '../utils';
import PostPreview from '../components/PostPreview';

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
                <Box
                  animation={{type: 'slideUp', duration: 1000, size: "medium"}}
                  justify="center"
                  align="center"
                  pad="medium"
                  margin={{top: "xlarge"}}
                  >
                  <Box direction="row-responsive" gap="medium" pad="medium" background={{color: "#FEFEFE", opacity: 0.9}} round="medium">
                    <Avatar src="/avatar.jpeg" size="144px" />
                    <Box>
                      <Heading margin="none" size="medium">Hi, I'm Chris.</Heading>
                        <Paragraph>
                          Project manager by day; full-stack developer by night. I like building data-driven applications to solve problems for people.
                        </Paragraph>
                        <Paragraph>
                          Outside of my day job, I spend most of my time these days building <Link href="https://routineops.com" passHref={true}><Anchor>RoutineOps</Anchor></Link> — a tool for teams to schedule recurring tasks to get shit done.
                        </Paragraph>
                    </Box>
                  </Box>
                </Box>

            </Stack>
          </Box>
          { posts.length > 0 && (
            <DiagonalSection background="#272614">
              <Heading>Latest Posts</Heading>

              <Box gap="medium">
                {posts.map((post, index) => (
                  <PostPreview post={post} key={index} />
                ))}
              </Box>

            </DiagonalSection>
          )}
        </Box>
      </React.Fragment>
  )
}

export default Home;
