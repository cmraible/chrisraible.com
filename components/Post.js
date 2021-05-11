import React from 'react';
import { Box, Heading, Text } from 'grommet';

const Post = ({ children, meta }) => {
    return (
        <Box fill="horizontal" align="center">
            <Box pad="medium" margin={{top: 'large'}} width="large" align="start" justify="start">
                <Heading margin={{bottom: 'none'}}>{meta.title}</Heading>
                <Heading level={2} color="text-weak">{meta.description}</Heading>
                {children}
            </Box>
        </Box>

    )
}

export default Post;