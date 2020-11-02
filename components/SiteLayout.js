import React from 'react';
import { Box } from 'grommet';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const SiteLayout = ({children}) => {

  console.log(children)
  return (
    <React.Fragment>
      <SiteHeader />
          {children}
      <SiteFooter />
    </React.Fragment>

  )
}

export default SiteLayout;
