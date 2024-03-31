import styled from "styled-components";

export const BackdropContainer = styled.div`
display: none;
position: fixed;
top: 0;
left: 0;

width: 100%;
height: 100%;
overflow: hidden;

z-index: 10;
background-color: #15151559;

&&.active{
    display: block;
}
`