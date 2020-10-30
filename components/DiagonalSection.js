import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Header, Layer, Sidebar, Text } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';


const DiagonalSection = ({ background, color, children }) => {


  return (
    <Box fill>
      <svg height="75px" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill={background} points="0,100 100,0 100,100"/>
      </svg>
      <Box pad="xlarge" background={background} color={color}>
        {children}
      </Box>
      <svg height="75px" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill={background} points="0,0 0,100 100,0"/>
      </svg>

    </Box>
  )
}

export default DiagonalSection;
