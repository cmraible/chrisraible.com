import '../styles/globals.css';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import SiteLayout from '../components/SiteLayout';


function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={grommet} full>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Grommet>
  )
}

export default MyApp
