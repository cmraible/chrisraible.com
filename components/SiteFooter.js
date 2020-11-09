import { Anchor, Box, Footer, Heading, Text } from 'grommet';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
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
          <Image
            style={{position: 'relative', zIndex: '-1'}}
            src={'/CR.png'}
            alt="CR Logo"
            width={84}
            height={46}
          />
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
