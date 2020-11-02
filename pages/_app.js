import '../styles/globals.css';
import theme from '../styles/theme';
import { Grommet } from 'grommet';
import SiteLayout from '../components/SiteLayout';


function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme} full id="grommetContainer">
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Grommet>
  )
}

export default MyApp
