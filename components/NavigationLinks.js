import { Anchor, Box } from 'grommet';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

const NavigationLinks = ( { size }) => {
  const router = useRouter();

  

  return (
    <Box direction="row" gap="medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="mailto:chris@chrisraible.com">Email</Link>
        {/* <Link href="/portfolio">Portfolio</Link> */}
    </Box>
  )
}

export default NavigationLinks;
