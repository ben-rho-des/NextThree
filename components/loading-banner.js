const StylLoading = styled.div`
    box-sizing: border-box;
    background: #1a1b1f;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 8px;
    padding: 2rem;
    // background: url(http://api.thumbr.it/whitenoise-200x200.png?background=1a1b1fff&noise=040712&density=53&opacity=20);
`;


export const Loading = () => {
    return (
        <StylLoading >
/******************************************<br/>
* Loading :: BRD :: 2020 - Welcome :) <br/>
******************************************/<br/>
        </StylLoading>
    )
}