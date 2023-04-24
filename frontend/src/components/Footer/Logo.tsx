import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    color: white;
    position:fixed;
    bottom:-0.5vw;
    left:2vw;
    z-index:2;
`
const LetterLogo = styled.div`
    font-family: "scrotnig";
    font-size: 5vw;
    font-weight: 500;
    display:inline-block;
`;
const Ahmad = styled.div`

    width: 12.114vw;
    font-family: "scrotnig";
    font-size: 1.4vw;
    font-weight:bold;
    color:white;

`;
const WebDeveloper = styled.div`

    font-family: "poppins";
    font-size: 1vw;
    line-height: 0vw;
`;
const TextWrapper = styled.div`
    margin-left:1vw;
    display:inline-block;
`

type Props = {
    size?: 'small' | 'large',
}

const Logo = (props: Props) =>{
    return(
        <Wrapper>
            <LetterLogo>a</LetterLogo>
            <TextWrapper>
                <Ahmad>Ahmad</Ahmad>
                <WebDeveloper>Web developer</WebDeveloper>
            </TextWrapper>
            
        </Wrapper>
    )

}
export default Logo;