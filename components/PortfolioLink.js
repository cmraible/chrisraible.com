import { Box } from 'grommet';
import { useRouter } from 'next/router';

const PortfolioLink = ({ label, href }) => {
  
  const router = useRouter();

  return (
        <Box 
          width="100%" 
          hoverIndicator
          background={{color: 'white', opacity: 0.2}}
          align="center"
          justify="center"
          pad="medium"
          round
          onClick={() => router.push(href).then(() => window.scrollTo(0, 0))}
          >
            {label}
          </Box>
  )
}

export default PortfolioLink;
