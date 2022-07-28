import "animate.css/animate.min.css";
import { Avatar, Box, Heading, Paragraph } from 'grommet';
import React from 'react';
import NavigationLinks from './NavigationLinks';
import SocialLinks from './SocialLinks';


const Home = () => {
  
  return (
      <React.Fragment>
        <Box direction="row-responsive" gap="medium" pad={{top: "large"}}>
        <Avatar src="/avatar.jpeg" size="96px" flex={false} />
        <Box gap="medium">
            <Heading margin="none">Chris Raible</Heading>
            <Paragraph margin="none">Web developer & engineer. Horrible golfer.</Paragraph>
            <NavigationLinks />
            <SocialLinks />
        </Box>
        </Box>  
      </React.Fragment>
  )
}

export default Home;
