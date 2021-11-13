import { Box } from 'grommet';
import React from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const SiteLayout = ({children}) => {

  return (
      <Box height={{min: '100vh'}} justify="between" id="main">
        {children}
        <SiteFooter />
      </Box>
  )
}

export default SiteLayout;
