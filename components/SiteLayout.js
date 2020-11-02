import React from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const SiteLayout = ({children}) => {

  return (
    <React.Fragment>
      <SiteHeader />
          {children}
      <SiteFooter />
    </React.Fragment>

  )
}

export default SiteLayout;
