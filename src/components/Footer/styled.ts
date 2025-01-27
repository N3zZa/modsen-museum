import styled from "styled-components"

export const StyledFooter = styled.footer`
    margin-top:auto;
    width: 100%;
    height: 127px;
    display: flex;
    align-items: center;
    background:white;
`
export const StyledFooterInner = styled.div`
    max-width:1280px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    height: 127px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:white;

    div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    p {
        font-size: 18px;
    }
`


export const Logo = styled.div`
    display: flex;
    gap: 0.5rem;
    
    p {
        margin: 0;
        margin-top: auto;
        margin-bottom: -3px;
        color:black;
    }
    span {
        color:#E0A449;
        font-weight:bold;
    }
`