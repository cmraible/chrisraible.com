import { Avatar, Box, Button, Header, Heading } from 'grommet';
import { Twitter, Linkedin, Github } from 'grommet-icons';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SiteHeader = () => {

  const [showMenu, setShowMenu] = useState(false);
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
      <Header background={background} pad="small" id="siteHeader">
        <Box direction="row" fill="horizontal" justify="between">
          <Box direction="row" align="center" gap="small" onClick={() => router.push('/')}>
            <Heading size="small" margin="none">Chris Raible</Heading>
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
