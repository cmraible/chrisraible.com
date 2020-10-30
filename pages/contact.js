import React from 'react';
import Head from 'next/head'
import { Header, Main, ResponsiveContext, Text } from 'grommet';
import SiteHeader from '../components/SiteHeader';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Chris Raible: Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <Main>

      </Main>
    </React.Fragment>
  )
}
