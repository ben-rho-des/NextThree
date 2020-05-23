import App from 'next/app';
import React from 'react';

import { GlobalStyles } from '../styles'
import { deepMerge } from 'grommet/utils';
import { grommet, Grommet } from 'grommet';

const theme = {
    colors: {
        primary: '#17ffd4',
        dark: '#033719' // #001b11
    },
    global: {
        font: {
            family: 'din regular',
            size: '14px',
            height: '20px'
        }
    },
    button: {
        border: {
            radius: undefined,
            color: '#2196f3'
        },
        padding: {
            vertical: '12px',
            horizontal: '24px'
        },
        default: {
            color: 'text',
            border: undefined,
            background: {
                color: 'red'
            },
            padding: {
                horizontal: '62px',
                vertical: '8px'
            }
        },
    }
};

const customTheme = deepMerge(grommet, theme);

export default class BRDApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Grommet background="transparent" theme={customTheme}>
                <Component {...pageProps} />
                <GlobalStyles />
            </Grommet>
        );
    }
}
