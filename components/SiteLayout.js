import { Box } from 'grommet';
import React from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const SiteLayout = ({children}) => {

  return (
      <Box justify="between" id="main">
        {children}
      </Box>
  )
}

export default SiteLayout;
