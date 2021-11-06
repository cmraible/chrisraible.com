import React from 'react';
import { Box, Heading, Text } from 'grommet';
import SiteHeader from './SiteHeader';
import Head from 'next/head';

const Post = ({ children, meta }) => {
    return (
        <>
        <Head>
            <title>{meta.title}</title>
        </Head>
        <SiteHeader />
        <Box fill align="center">
            <Box pad="medium" width="large" align="start" justify="start">
                <Heading margin={{bottom: 'none'}}>{meta.title}</Heading>
                <Heading level={2} color="text-weak">{meta.description}</Heading>
                {children}
            </Box>
        </Box>
        </>

    )
}

export default Post;