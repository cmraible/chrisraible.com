import React from 'react';
import { Box, Heading, Text } from 'grommet';
import Image from 'next/image';
import SiteHeader from './SiteHeader';
import Head from 'next/head';

const Post = ({ children, meta }) => {
    return (
        <>
        <Head>
            <title>{meta.title}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@chrisraible" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
        </Head>
        <SiteHeader />
        <Box fill align="center">
            <Box pad="medium" width="large" align="start" justify="start">
                {meta.cover}
                <Heading margin={{bottom: 'none'}}>{meta.title}</Heading>
                <Heading size="small" level={2} color="text-weak">{meta.description}</Heading>
                {children}
            </Box>
        </Box>
        </>

    )
}

export default Post;