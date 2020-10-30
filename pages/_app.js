import '../styles/globals.css'
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={grommet} full>
      <Component {...pageProps} />
    </Grommet>
  )
}

export default MyApp