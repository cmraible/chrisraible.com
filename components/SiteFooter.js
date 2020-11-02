import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Anchor, Box, Button, Footer, Heading, Layer, Sidebar, Text } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';

const SiteFooter = ({children}) => {

  return (
    <Box fill="horizontal">
      <svg style={{position: 'relative', bottom: -1}} height="100px" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#CCCCCC" points="0,100 100,0 100,100"/>
      </svg>
      <Footer background="#CCCCCC" style={{width: '100%', zIndex: 1}} pad="medium" >
      <Box>
        <Link href="/">
          <Image
            style={{position: 'relative', zIndex: '-1'}}
            src={'/CR.png'}
            width={84}
            height={46}
          />
        </Link>
        <Box pad="small">
          <Heading level={3}>Contact me</Heading>
          <Text>Email: <Anchor href="mailto:chris@chrisraible.com">chris@chrisraible.com</Anchor></Text>
          <Text>Phone: (215) 490-3329</Text>
        </Box>
      </Box>
      <Box align="end" gap="medium" pad={{horizontal: 'xlarge'}}>
      <Text size="xlarge">
          <Link href="/">Home</Link>
        </Text>
        <Text size="xlarge">
          <Link href="/about">About</Link>
        </Text>
        <Text size="xlarge">
          <Link href="/contact">Contact</Link>
        </Text>
      </Box>

      </Footer>
    </Box>

  )
}

export default SiteFooter;
