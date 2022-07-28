import { MDXProvider } from '@mdx-js/react';
import { Anchor, Box, Heading, Paragraph, PageHeader } from 'grommet';
import Code from './Code';
import Pre from './Pre';
import Head from 'next/head';
import SiteHeader from './SiteHeader';

const components = {
    h1: (props) => <Heading level={1} {...props}>{props.children}</Heading>,
    h2: (props) => <Heading level={2} {...props}>{props.children}</Heading>,
    h3: (props) => <Heading level={3} {...props}>{props.children}</Heading>,
    p: (props) => <Paragraph fill={true}>{props.children}</Paragraph>,
    pre: Pre,
    code: Code
  }

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
        <Box fill align="center">
            <Box pad="medium" width="large" align="start" justify="start">
                {meta.cover}
                <Heading level={1} margin="none">{meta.title}</Heading>
                <Paragraph fill={true}>{meta.description}</Paragraph>
            <MDXProvider components={components}>
                {children}
            </MDXProvider>
            </Box>
            
        </Box>
        </>

    )
}

export default Post;