

import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeIn } from '../keyframes';

import Blob from '../blob';

// need to clean up these styles
const BannerText = styled.div`
    color: #fff;
    font-family: din exp;
    font-weight: bold;
    width: 50%;
    position: relative;
    border-right: 2px solid transparent;
    margin-top: 3rem;

    .main-text {
        border-top: 2px solid white;
        border-bottom: 2px dotted white;
        height: 450px;
        margin-bottom: 2rem;
        h1 {
            margin: 0 0 4rem;
        }        
    }
    &.is-closed {

        border-right-color: white;
        right: 48%;
        .main-text {
            border-top-color: transparent;
            border-bottom-color: transparent;
        }

        button {
            content: '>';
        }
        h1, h2 {
            font-size: 3.8rem;
            line-height: 3rem;
        }
        h1 {
            position: absolute;
            transform: rotate(270deg);
            right: -118px;
            bottom: 190px;

            strong {
                background: none;
                font-size: 2rem;
                position: absolute;
                line-height: 3rem;
                letter-spacing: 0;
                border-top: 1px solid white;
                border-bottom: 1px solid white;
                transform: rotate(-270deg);
                color: white;
                right: -60px;
                bottom: -5px;
            }
        }
        h2 {
            position: absolute;
            transform: rotate(270deg);
            top: 171px;
            right: -20px;
        }
        p,
        .fluff, 
        .process {
            opacity: 0;
        }
    }
    button {
        right: 0;
        position: absolute;
        bottom: 0;
        background: none;
        border: 4px solid white;
        color: white;
        box-sizing: border-box;
        padding: 20px;
        content: 'x';
        font-weight: bold;
        font-size: 2rem;
    }

    h1, h2, p {
        text-shadow: 0px 0px 3px rgba(0,0,0,0.1);
    }

    h1 {
        font-size: 180px;
        line-height: 200px;
        letter-spacing: 5px;
        text-align: left;
        margin: 0;

        strong {
            color: ${props => props.theme.colors.dark};
            background: ${props => props.theme.colors.primary};
            mix-blend-mode: multiply;
            display: block;
            text-shadow: none;
            line-height: 100px;
            margin-top: -45px;
        }
    }   
    h2 {
        font-size: 110px;
        line-height: 120px;
        letter-spacing: 2px;
        margin: 0;
    }
    h3,
    .process {
        font-size: 26px;
        line-height: 26px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 0;

        strong {
            background: ${props => props.theme.colors.dark};
            mix-blend-mode: multiply;
            letter-spacing: 10px;
            padding: 0 20px;
            text-shadow: none;
        }
    }

    .process {
        display: block;
        right: 30px;
        top: 200px;
        position: absolute;
        mix-blend-mode: multiply;
        color: ${props => props.theme.colors.dark};
        text-align: right;
        text-shadow: none;
        
        .blink {
            animation-name: ${fadeIn};
            animation-duration: 2s;
            animation-iteration-count:infinite;
            animation-timing-function:ease-in-out;
            animation-direction: alternate; 
        }
    }

    p {
        margin-top: 2rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        max-width: 700px;
        font-size: 20px;
        line-height: 24px; 
    }

    .fluff {
        margin-bottom: 7rem;
        border-bottom: 2px solid white;
        padding-bottom: 1rem;
        display: flex;

        > h3 {
            flex-grow: 1;
        }
        h3 + h3 {
            text-align: right;
        }
    }
`;

const StyledBlobWrap = styled.div`
    z-index: -1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height 100vh;
`;

const BlobControls = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    div div {
        flex-direction: column;
        &:last-child {
            margin-left: 2rem;
        }
    }

    button {
        background: none;
        border: 4px solid white;
        padding: 20px;
        max-height: 50px;
    }

    > div > button:first-of-type {
        align-self: flex-end;
    }
`;

const BannerWrap = styled.div`
    display: flex;

    ${BannerText},
    ${BlobControls} {
        width: 50%;
    }
`;

const OPEN_CLASS='is-open';
const CLOSED_CLASS='is-closed';

const Banner = () => {
    const [blobEvent, setBlobEvent] = useState(null);
    const [bannerState, setBannerState] = useState(OPEN_CLASS);
    return (
    <>
    <StyledBlobWrap>
        {process.browser && (<Blob event={blobEvent} />)}
    </StyledBlobWrap>
    <BannerWrap>
        <BannerText className={bannerState}>
            <div className="main-text">
                <h1>Prototype&nbsp;<strong>#020</strong></h1>
                <h2>Flow</h2>
            </div>
            
            <div className="fluff">
                <span className="process">Executing tests <span className="blink">█</span></span>
                <h3>流 / fluir / बहे / couler</h3>
                <h3>Sequence <strong>T A G A A T</strong></h3>
            </div>
            <p>The state in which a person is engaged in an activity where they are fully immersed with a feeling of energized focus, involvement, and success in the process of the activity.</p>
            <button onClick={() => {
                setBannerState(bannerState === OPEN_CLASS ? CLOSED_CLASS : OPEN_CLASS)
            }}>{bannerState === OPEN_CLASS ? 'x' : '>'}</button>
        </BannerText>
        <BlobControls>
            {/* <!-- todo move to provider --> */}
            <div>
                <button
                    onMouseDown={() => setBlobEvent(`ROTATE-X-ACTIVE`)}
                    onMouseUp={() => setBlobEvent(null)}
                    >
                    rotate x</button>
                <div>
                    <button
                        onMouseDown={() => setBlobEvent(`ROTATE-Y-ACTIVE`)}
                        onMouseUp={() => setBlobEvent(null)}
                        >
                        rotate y</button>
                    <button onMouseDown={() => setBlobEvent(`ROTATE-Z-ACTIVE`)}
                        onMouseUp={() => setBlobEvent(null)}
                        >
                        rotate z</button>
                </div>
                <div>
                    <button onMouseDown={() => setBlobEvent(`SCALE-UP-ACTIVE`)}
                        onMouseUp={() => setBlobEvent(null)}
                        >
                        scale up</button>

                    <button onMouseDown={() => setBlobEvent(`SCALE-DOWN-ACTIVE`)}
                        onMouseUp={() => setBlobEvent(null)}
                        >
                        scale down</button> 
                </div>
            </div>
        </BlobControls>
    </BannerWrap>
    </>
)};

export default Banner;
