import { Avatar,Box, Button, Header, Heading } from 'grommet';
import { Github, Linkedin, Twitter } from 'grommet-icons';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SiteHeader = () => {

  const [background, setBackground] = useState({
    color: "white",
    opacity: 0
  })
  const router = useRouter();

  // Change the header to white background when page is scrolled
  useEffect(() => {
    // Because Grommet is overflow: auto, need to get grommet div element instead of window.scroll
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 0) {
        setBackground({
          color: "white",
          opacity: 1
        })
      } else {
        setBackground({
          color: "white",
          opacity: 0
        })
      }
    })
  }, []);

  return (
      <Header background="background-contrast" pad="small" id="siteHeader" style={{zIndex: 99999}}>
        <Box background={background} direction="row" fill="horizontal" justify="between" pad="small">
          <Box direction="row" align="center" gap="small" onClick={() => router.push('/')}>
            <Avatar src="/avatar.jpeg" size="48px" />
            <Heading style={{whiteSpace: "nowrap"}} color="text" size="small" margin="none">Chris Raible</Heading>
          </Box>
          <Box direction="row" align="center">
            <Button icon={<Twitter color="gray" />} onClick={() => router.push('https://twitter.com/RaibleChris')}/>
            <Button icon={<Linkedin color="gray" />} onClick={() => router.push('https://www.linkedin.com/in/chrisraible/')}/>
            <Button icon={<Github color="gray" />} onClick={() => router.push('https://github.com/cmraible')}/>
          </Box>
        </Box>
      </Header>
  )
}

export default SiteHeader;
