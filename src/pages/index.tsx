import Head from 'next/head';

import Masthead from '../components/masthead';
import Banner from '../components/banner';
import Social from '../components/social';

export default () => (
    <>
        <Head>
            <title>BRD</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap"
                rel="stylesheet"
            />
        </Head>

        <Masthead />
        <Banner />
        <Social />
    </>
);
