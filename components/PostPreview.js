import { Box, Heading, Paragraph } from 'grommet';
import { useRouter } from 'next/router';
import React from 'react';

const PostPreview = ({ post }) => {

    const router = useRouter();

    const {
        link,
        module: { meta }
    } = post
    return (
        <Box
            background={{color: 'white', opacity: 0.1}}
            pad="medium"
            round='small'
            flex="shrink"
            onClick={() => router.push(`/posts${link}`).then(() => window.scrollTo(0, 0))}
        >
            <Heading level={2}>{meta.title}</Heading>
            <Paragraph level={3} color="text-weak">{meta.description}</Paragraph>
        </Box>
    )
}

export default PostPreview;