

import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeIn } from '../keyframes';

import Blob from '../blob';

const hasWindow = typeof window !== 'undefined' && typeof document !== 'undefined';

const BannerText = styled.div`
    color: #fff;
    font-family: din exp;
    font-weight: bold;
    width: auto;
    position: relative;
    h1, h2, p {
        text-shadow: 0px 0px 3px rgba(0,0,0,0.1);
    }
    h1 {
        border-top: 2px solid white;
        padding-top: 3rem;
        font-size: 180px;
        line-height: 100px;
        letter-spacing: 5px;
        text-align: left;

        strong {
            color: ${props => props.theme.colors.dark};
            background: ${props => props.theme.colors.primary};
            mix-blend-mode: multiply;
            display: block;
            text-shadow: none;
        }
    }
        
    h2 {
        font-size: 110px;
        line-height: 120px;
        letter-spacing: 2px;
        margin-top: 0;
        margin-bottom: 2rem;
        border-bottom: 2px dotted white;
        padding-bottom: 1rem;
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
        margin-top: -55px;
        margin-right: 25px;
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
`;

const BannerWrap = styled.div`
    display: flex;

    ${BannerText},
    ${BlobControls} {
        max-width: 50%;
    }
`;

const Banner = () => {
    const [blobEvent, setBlobEvent] = useState(null);

    return (
    <>
    <StyledBlobWrap>
        {hasWindow && (<Blob event={blobEvent} />)}
    </StyledBlobWrap>

    <BannerWrap>
        <BannerText>
            <h1>Prototype<br/><strong>#020</strong><span className="process">Executing tests <span className="blink">█</span></span></h1>
            <h2>Flow Optimisation</h2>
            <div className="fluff">
                <h3>流 / fluir / बहे / couler</h3>
                <h3>Sequence <strong>T A G A A T</strong></h3>
            </div>
            <p>The state in which a person is engaged in an activity where they are fully immersed with a feeling of energized focus, involvement, and success in the process of the activity.</p>
        </BannerText>
        <BlobControls>
            {/* <!-- todo move to provider --> */}
            <button
                onMouseDown={() => setBlobEvent(`ROTATE-X-ACTIVE`)}
                onMouseUp={() => setBlobEvent(null)}
                >
                rotate x</button>
            <button
                onMouseDown={() => setBlobEvent(`ROTATE-Y-ACTIVE`)}
                onMouseUp={() => setBlobEvent(null)}
                >
                rotate y</button>
            <button onMouseDown={() => setBlobEvent(`ROTATE-Z-ACTIVE`)}
                onMouseUp={() => setBlobEvent(null)}
                >
                rotate z</button>

            <button onMouseDown={() => setBlobEvent(`SCALE-UP-ACTIVE`)}
                onMouseUp={() => setBlobEvent(null)}
                >
                scale up</button>

            <button onMouseDown={() => setBlobEvent(`SCALE-DOWN-ACTIVE`)}
                onMouseUp={() => setBlobEvent(null)}
                >
                scale down</button>  
        </BlobControls>
    </BannerWrap>
    </>
)};

export default Banner;
