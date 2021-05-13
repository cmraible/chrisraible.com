import { Box, Button, Footer, Heading } from 'grommet';
import { Twitter, Linkedin, Github } from 'grommet-icons';
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
        <Box justify="between" fill="horizontal" direction="row">
          <Box onClick={() => router.push('/')}>
            <Heading size="small" margin="none">Chris Raible</Heading>
          </Box>
          <Box direction="row">
            <Button icon={<Twitter color="gray" />} onClick={() => router.push('https://twitter.com/RaibleChris')}/>
            <Button icon={<Linkedin color="gray" />} onClick={() => router.push('https://www.linkedin.com/in/chrisraible/')}/>
            <Button icon={<Github color="gray" />} onClick={() => router.push('https://github.com/cmraible')}/>
          </Box>
        </Box>


      </Footer>
    </Box>

  )
}

export default SiteFooter;
