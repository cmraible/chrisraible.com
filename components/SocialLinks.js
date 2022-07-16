import { Box, Button } from 'grommet';
import { Github, Linkedin, Twitter, Youtube, Tictok } from 'grommet-icons';
import { useRouter } from 'next/router';
import React from 'react';

const SocialLinks = ( { size }) => {
  const router = useRouter();

  

  return (
    <Box direction="row">
        <Button icon={<Twitter color="gray" size={size} />} onClick={() => router.push('https://twitter.com/RaibleChris')}/>
        <Button icon={<Linkedin color="gray" size={size} />} onClick={() => router.push('https://www.linkedin.com/in/chrisraible/')}/>
        <Button icon={<Github color="gray" size={size} />} onClick={() => router.push('https://github.com/cmraible')}/>
        <Button icon={<Youtube color="gray" size={size} />} onClick={() => router.push('https://www.youtube.com/channel/UCoVzT1bE9w5wklD2V15mqmw')} />
        <Button icon={<Tictok color="gray" size={size} />} onClick={() => router.push('https://www.tiktok.com/@chrisraible')} />
    </Box>
  )
}

export default SocialLinks;
