import React, { useEffect, useState } from 'react';
import PostPreview from '../../components/PostPreview';
import Head from 'next/head';
import { Box, Heading, Stack } from 'grommet';
import { posts } from '../../utils';

const Blog = () => {

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
        <title>Chris Raible | Posts</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <Box margin={{top: 'large'}} width="large">
        {posts.map((post) => (
          <PostPreview post={post} />
        ))}
      </Box>
    </React.Fragment>
  )
}

export default Blog;