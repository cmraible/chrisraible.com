import { Box } from 'grommet';
import React from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const SiteLayout = ({children}) => {

  return (
      <Box fill justify="between" id="main">
        {children}
        <SiteFooter />
      </Box>
  )
}

export default SiteLayout;
