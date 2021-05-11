import { Main } from 'grommet';
import React from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const SiteLayout = ({children}) => {

  return (
      <Main flex={false} style={{overflow: 'hidden'}}>
        <SiteHeader />
            {children}
        <SiteFooter />
      </Main>
  )
}

export default SiteLayout;
