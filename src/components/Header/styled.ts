import styled from "styled-components"

export const StyledHeader = styled.header`
    margin-bottom: 100px;
    background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
    width: 100%;
    height: 127px;
    display: flex;
    align-items: center;
`
export const StyledHeaderInner = styled.div`
    max-width:1280px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    height: 127px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:white;

    div:last-of-type {
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
    }
    span {
        color:#E0A449;
        font-weight:bold;
    }
`