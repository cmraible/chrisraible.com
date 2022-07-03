import { Box, Heading } from 'grommet';
import React from 'react';
import { posts } from '../utils';
import PostPreview from './PostPreview';

const LatestPosts = () => {

  return (
      <>
    { posts.length > 0 && (

          <Box gap="medium">
            {posts.slice(0,3).map((post, index) => (
              <PostPreview post={post} key={index} />
            ))}
          </Box>
      )}
      </>
  )
}

export default LatestPosts;
