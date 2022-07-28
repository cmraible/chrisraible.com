import { Anchor, Box, Footer, Heading } from 'grommet';
import { useRouter } from 'next/router';
import SocialLinks from './SocialLinks';
import NavigationLinks from './NavigationLinks';

const SiteFooter = () => {
  const router = useRouter();

  return (
    <Box fill="horizontal" className="no-print" >
      <Footer fill background="#CCCCCC" style={{width: '100%', zIndex: 1}} pad="medium" height={{min: "10vh"}} >
        <Box justify="between" fill="horizontal" direction="row">
          <Box>
            <Box onClick={() => router.push('/')}>
              <Heading size="small" margin="none">Chris Raible</Heading>
            </Box>
            <NavigationLinks />

          </Box>
          <Box>
            <SocialLinks size="medium" />
          </Box>
        </Box>


      </Footer>
    </Box>

  )
}

export default SiteFooter;
