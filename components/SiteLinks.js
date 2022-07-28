import { Box } from 'grommet';
import { useRouter } from 'next/router';
import SiteLink from './SiteLink';

const SiteLinks = () => {
  
  const router = useRouter();

  return (
    <Box gap="medium">
        <SiteLink label="About Me" href="/about" />
        <SiteLink label="Github" href="https://github.com/cmraible" />
        <SiteLink label="Email me" href="mailto:chris@chrisraible.com" />
    </Box>
  )
}

export default SiteLinks;
