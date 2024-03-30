import styled from "styled-components";

export const BackdropContainer = styled.div`
display: none;
position: absolute;
position: fixed;
top: 0;
left: 0;

width: 100vw;
height: 100vh;

z-index: 10;
background-color: #15151559;

&&.active{
    display: block;
}
`