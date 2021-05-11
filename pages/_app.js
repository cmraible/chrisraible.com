import '../styles/globals.css';
import React, { useRef } from 'react';
import theme from '../styles/theme';
import { Grommet } from 'grommet';
import SiteLayout from '../components/SiteLayout';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = ({ Component, pageProps }) => {


    return (
        <ParallaxProvider>
            <Grommet theme={theme} id="grommetContainer">
                <SiteLayout>
                    <Component {...pageProps} />
                </SiteLayout>
            </Grommet>
        </ParallaxProvider>
    )
}

export default App;
