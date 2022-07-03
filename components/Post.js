import { Anchor, Box, Heading, PageHeader } from 'grommet';
import Head from 'next/head';
import SiteHeader from './SiteHeader';

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
                <PageHeader 
                title={meta.title}
                subtitle={meta.description}
                parent={<Anchor href="/" label="Home" />}
            />
            {children}
            </Box>
            
        </Box>
        </>

    )
}

export default Post;