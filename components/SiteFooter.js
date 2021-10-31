import { Box, Footer, Heading } from 'grommet';
import { useRouter } from 'next/router';
import SocialLinks from './SocialLinks';
import React from 'react';

const SiteFooter = () => {
  const router = useRouter();

  return (
    <Box fill="horizontal" height="10vh">
      <Footer fill background="#CCCCCC" style={{width: '100%', zIndex: 1}} pad="medium" >
        <Box justify="between" fill="horizontal" direction="row">
          <Box onClick={() => router.push('/')}>
            <Heading size="small" margin="none">Chris Raible</Heading>
          </Box>
          <SocialLinks size="medium" />
        </Box>


      </Footer>
    </Box>

  )
}

export default SiteFooter;
