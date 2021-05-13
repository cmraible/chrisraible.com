import { Main } from 'grommet';
import React from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const SiteLayout = ({children}) => {

  return (
      <Main>
        <SiteHeader />
            {children}
        <SiteFooter />
      </Main>
  )
}

export default SiteLayout;
