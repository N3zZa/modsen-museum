import styled from "styled-components"

export const CardBlock = styled.div`
    display:flex;
    position:relative;
    max-width:387px;
    width:100%;
    height:514px;
`
export const CardImage = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    width:100%;
    height: 100%;
    max-height: 444px;
`
export const CardInfo = styled.div`
    margin-top:auto;
    max-width:334px;
    height: 132px;
    background: #fff;
    padding: 17px 24px;
    z-index:1;
`
export const CardInfoInner = styled.div`
    h4 {
        font-size: 15.35px;
        font-weight: 400;
        line-height: 26.32px;
        letter-spacing: -0.01em;
        color:#E0A449;
    }
    h4:first-of-type {
        font-size: 17.54px;
        font-weight: 500;
        line-height: 26.32px;
        letter-spacing: -0.03em;
        color:#393939;
    }
`

export const FavoriteButton = styled.button`
    border: none;
    border-radius: 50%;
    background: #F9F9F9;
    padding: 17px;
    cursor:pointer;
`
