import React from 'react';
import { Heading } from 'grommet';
import Link from 'next/link';

const PostPreview = ({ post }) => {
    const {
        link,
        module: { meta }
    } = post
    return (
        <article>
            <Heading>{meta.title}</Heading>
            <Heading level={2} color="text-weak">{meta.description}</Heading>
            <Link href={'/blog' + link}>Read more</Link>
        </article>
    )
}

export default PostPreview;