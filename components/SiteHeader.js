import { Box } from 'grommet';
import SiteHeadline from './SiteHeadline';

const SiteHeader = () => {

  return (
    <Box
    fill="horizontal"
    pad="medium"
    height={{min: "90vh"}}
  >
    <SiteHeadline /> 
  </Box>
  )
}

export default SiteHeader;
