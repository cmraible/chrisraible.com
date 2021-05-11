import { Box, Footer, Heading } from 'grommet';
import { useRouter } from 'next/router';
import React from 'react';

const SiteFooter = () => {
  const router = useRouter();

  return (
    <Box fill="horizontal">
      <svg style={{position: 'relative', bottom: -1}} height="100px" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#CCCCCC" points="0,100 100,0 100,100"/>
      </svg>
      <Footer fill="horizontal" background="#CCCCCC" style={{width: '100%', zIndex: 1}} pad="medium" >
        <Box onClick={() => router.push('/')}>
          <Heading size="small" margin="none">Chris Raible</Heading>
        </Box>
      </Footer>
    </Box>

  )
}

export default SiteFooter;
