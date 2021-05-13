import { Grommet } from 'grommet';
import React, { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import '../styles/globals.css';
import theme from '../styles/theme';
import { pageview } from '../lib/ga';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }) => {

    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url);
        }
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [router.events]);


    return (
            <Grommet theme={theme} id="grommetContainer">
                <SiteLayout>
                    <Component {...pageProps} />
                </SiteLayout>
            </Grommet>
    )
}

export default App;
