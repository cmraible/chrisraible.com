import { Box, Heading, Paragraph, Text } from 'grommet';
import { useRouter } from 'next/router';
import React from 'react';
import {DateTime} from 'luxon';


const PostPreview = ({ post }) => {

    const router = useRouter();

    const {
        link,
        module: { meta }
    } = post
    return (
        <Box
            background={{color: 'white', opacity: 0.2}}
            hoverIndicator={true}
            round="medium"
            pad="medium"
            margin="small"
            flex="shrink"
            onClick={() => router.push(`/posts${link}`).then(() => window.scrollTo(0, 0))}
        >
            <Heading level={3} margin="none">{meta.title}</Heading>
            <Paragraph>{meta.description}</Paragraph>
        </Box>
    )
}

export default PostPreview;