import React from 'react';
import { Box } from 'grommet';


const DiagonalSection = ({ background, color, children }) => {


  return (
    <Box fill>
      <svg style={{position: 'relative', bottom: -1}} height="100px" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon stroke={background} fill={background} points="0,100 100,0 100,100"/>
      </svg>
      <Box pad="large" background={background} color={color}>
        {children}
      </Box>
      <svg height="100px" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill={background} points="0,0 0,100 100,0"/>
      </svg>
    </Box>
  )
}

export default DiagonalSection;
